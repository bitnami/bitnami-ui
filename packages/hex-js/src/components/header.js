// Utils
import b from '../base';
import { touchDevice } from '../utils/mobile';

/**
 * Initialize the Header component. It listen to open/close events for responsive
 * and accesibility requirements
 */
const header = () => {
  // Toogle the status of the header. It's only used on mobile navigation
  const toggleHeader = (hamburguer, event) => {
    const headerNode = b('.header');
    const height = headerNode.height();
    const open = !headerNode.css.toggle('header-open');
    // Setup accesibility changes
    hamburguer.aria.expand(open);
    // Add a margin top to the body
    if (open) {
      b('body').css.style({ 'margin-top': `${height}px`});
    } else  {
      b('body').css.style({});
    }
  }

  // Toggle submenu
  const toggleSubmenu = (submenu, event) => {
    event.preventDefault();
    event.stopPropagation();
    let open = false;

    if (submenu.css.contains('header__nav__submenu-open')) {
      closeSubmenu(submenu, event);
    } else {
      openSubmenu(submenu, event, true);
    }
  }

  const closeSubmenu = (submenu, event) => {
    submenu.css.remove('header__nav__submenu-open');
    // Setup accesibility changes
    submenu.aria.expand(false);
  }

  const openSubmenu = (submenu, event, focus) => {
    // Close others
    b('.header__nav__submenu-open').forEach((el) => {
      closeSubmenu(el);
    });
    submenu.css.add('header__nav__submenu-open');
    // Setup accesibility changes
    submenu.aria.expand(true);
    if (focus === true) {
      // Focus on first item
      submenu.tree.find('a')[0].focus();
    }
  }

  // Initialization
  const hamburguer = b('.header__nav__hamburguer');
  if (hamburguer.length > 0) {
    // Add toggle to the hamburguer
    hamburguer.events.on('click', (e) => toggleHeader(hamburguer, e));
  }

  const submenus = b('.header__nav__submenu');
  if (submenus.length > 0) {
    // Add event listeners for submenus
    b('.header__nav__submenu').forEach((el) => {
      // Select the previous anchor
      const button = el.tree.prev();
      const parent = el.tree.parent();

      button.events.on('click', (e) => toggleSubmenu(el, e));
      // Hover for Desktop
      if (!touchDevice) {
        // Hover for normal
        parent.events.on('mouseenter', (e) => openSubmenu(el, e, false));
        parent.events.on('mouseleave', (e) => closeSubmenu(el, e));
      }
    });

    // Escape the menu
    document.addEventListener('keyup', (e) => {
      if (e.key !== 'Escape') { return; }
      // Close open menus
      const open = b('.header__nav__submenu-open');
      if (open.length > 0) {
        open.forEach((el) => closeSubmenu(el));
        const last = open.length === 1 ? open : open[open.length - 1];
        // Focus the parent link
        last.tree.prev().focus();
      }
    });
  }
}

export default header;
