// Utils
import b from '../base';
import { touchDevice } from '../utils/mobile';

const dropdown = () => {
  /**
   * Toggle the given dropdown
   *
   * @param [UINode] drop The dropdown instance
   */
  const toggleDropdown = (drop) => {
    const close = drop.css.toggle('dropdown-open');
    const button = drop.tree.find('.button-dropdown');
    button.css.toggle('button-dropdown-open');
    button.aria.expand(!close);
    drop.tree.find('.dropdown__list').aria.show(!close);
  }

  /**
   * Close the given dropdown
   *
   * @param [UINode] drop The dropdown instance
   */
  const closeDropdown = (drop) => {
    drop.css.remove('dropdown-open');
    drop.tree.find('.button-dropdown').css.remove('button-dropdown-open');
    drop.tree.find('.dropdown__list').aria.show(false);
  }

  b('.dropdown').forEach((drop) => {
    drop.tree.find('.button-dropdown').events.on('click', () => toggleDropdown(drop));
  });

  // Escape the current menu
  // TODO: Merge this with the main header and other elements
  document.addEventListener('keyup', (e) => {
    if (e.key !== 'Escape') { return; }
    // Close open menus
    const current = b(document.activeElement);
    const drop = current.tree.parent('.dropdown');
    if (drop != null) {
      toggleDropdown(drop);
      drop.tree.find('.button-dropdown').focus();
    }
  });

  document.addEventListener('click', (e) => {
    // Close open menus
    const current = b(document.activeElement);
    const drop = current.tree.parent('.dropdown');
    let toClose = [];

    if (drop != null) {
      toClose = b('.dropdown').filter((el) => el.node !== drop.node);
    } else {
      toClose = b('.dropdown');
    }

    toClose.forEach((d) => closeDropdown(d))
  });
}

export default dropdown;
