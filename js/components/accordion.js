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

  // Add event listeners and build controls
  b('.accordion').forEach((accordion) => {
    // Events
    accordion.tree.find('.accordion__header__button').forEach((button) => {
      // Open/close the accordion
      button.events.on('click', (e) => {
        const panel = button.tree.parent().tree.parent();

        if (panel.css.contains('accordion__panel-open')) {
          panel.css.remove('accordion__panel-open');
        } else {
          const open = accordion.tree.find('.accordion__panel-open');
          if (open.length > 0) {
            open.css.style({});
            open.css.remove('accordion__panel-open');
            // Change aria
            open.tree.find('.accordion__content').aria.show(false);
            open.tree.find('.accordion__header__button').aria.expand(false);
          }
          // Open
          panel.css.style({ 'max-height': `${panel.node.scrollHeight}px` });
          panel.css.add('accordion__panel-open');
          panel.tree.find('.accordion__content').aria.show();
          button.aria.expand();
        }
      });
    });
  });
}

export default accordion;
