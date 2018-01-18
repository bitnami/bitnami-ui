// Utils
import b from '../base';

/**
 * Initialize the Accordion component. It listen to open/close events for responsive
 * and accesibility requirements
 */
const accordion = () => {
  // Initialize the open element
  const openPanel = b('.accordion__panel-open');

  if (openPanel.length > 0) {
    openPanel.forEach((panel) => {
      panel.css.style({ 'max-height': `${panel.node.scrollHeight}px` });
    });
  }

  /**
   * Check if the current title has two lines and add the proper max-height size.
   */
  const setHeaderMaxHeight = (title) => {
    const panel = title.tree.parent('.accordion__panel');
    if (title.height() > 30) {
      panel.css.style({ 'max-height': '7em' });
    } else {
      panel.css.style({});
    }
  }

  // Add event listeners and build controls
  b('.accordion').forEach((accordion) => {
    // Set the correct height of the titles (mobile)
    // https://github.com/bitnami/ui/issues/84
    accordion.tree.find('.accordion__header__title').forEach((title) => {
      const panel = title.tree.parent('.accordion__panel');
      if (!panel.css.contains('accordion__panel-open')) {
        setHeaderMaxHeight(title);
      }
    });

    // Events
    accordion.tree.find('.accordion__header__button').forEach((button) => {
      // Open/close the accordion
      button.events.on('click', (e) => {
        // TODO: Add an optional argument to the parent() method to set a selector to find
        const panel = button.tree.parent('.accordion__panel');

        if (panel.css.contains('accordion__panel-open')) {
          panel.css.remove('accordion__panel-open');
          const title = panel.tree.find('.accordion__header__title');
          setHeaderMaxHeight(title);
        } else {
          const open = accordion.tree.find('.accordion__panel-open');
          if (open.length > 0) {
            setHeaderMaxHeight(open.tree.find('.accordion__header__title'));
            open.css.remove('accordion__panel-open');
            // Change aria
            open.tree.find('.accordion__content').aria.show(false);
            open.tree.find('.accordion__header__button').aria.expand(false);
          }
          // Open
          panel.css.style({ 'max-height': `${panel.height()}px` });
          panel.css.add('accordion__panel-open');
          panel.tree.find('.accordion__content').aria.show();
          button.aria.expand();
        }
      });
    });
  });
}

export default accordion;
