// Utils
import b from '../base/node';
import { touchDevice } from '../utils/mobile';

/**
 * Initialize the Header component. It listen to open/close events for responsive
 * and accesibility requirements
 */
const header = () => {
  // Toogle the status of the header. It's only used on mobile navigation
  const toggleHeader = (hamburguer, event) => {
    const headerNode = b('.header');
    const open = headerNode.css.toggle('header-open');
    // Setup accesibility changes
    hamburguer.aria.expand(open);
  }

  // Toggle submenu
  const toggleSubmenu = (submenu, event) => {
    event.preventDefault();
    event.stopPropagation();
    let open = false;

    if (submenu.css.contains('header__nav__submenu-open')) {
      submenu.css.remove('header__nav__submenu-open');
    } else {
      // Close others
      b('.header__nav__submenu-open').forEach((el) => {
        closeSubmenu(el);
      });
      open = true;
      submenu.css.add('header__nav__submenu-open');
    }

    // Setup accesibility changes
    submenu.aria.expand(open);
  }

  const closeSubmenu = (submenu, event) => {
    submenu.css.remove('header__nav__submenu-open');
    // Setup accesibility changes
    submenu.aria.expand(false);
  }

  const openSubmenu = (submenu, event) => {
    submenu.css.add('header__nav__submenu-open');
    // Setup accesibility changes
    submenu.aria.expand(true);
  }

  // Initialization
  const hamburguer = b('.header__nav__hamburguer');
  if (hamburguer.length > 1) {
    // Add toggle to the hamburguer
    hamburguer.events.on('click', (e) => toggleHeader(hamburguer, e));

    // Add event listeners for submenus
    b('.header__nav__submenu').forEach((el) => {
      // Select the previous anchor
      const button = el.tree.prev();
      const parent = el.tree.parent();

      // Click for mobile
      if (touchDevice) {
        button.events.on('click', (e) => toggleSubmenu(el, e));
      } else {
        // Hover for normal
        parent.events.on('mouseenter', (e) => openSubmenu(el, e));
        parent.events.on('mouseleave', (e) => closeSubmenu(el, e));
      }
    });
  }
}

export default header;
