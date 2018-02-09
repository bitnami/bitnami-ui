// @flow

// Utils
import b from '../base';

/**
 * Initialize the tabs and manage the user interaction. It takes care of updating the Aria values.
 * However, the initial Aria configuration must be in the HTML.
 */
const verticalTabs = () => {
  // Initialize the clicking behaviour for tabs
  b('.verticalTabs').forEach((tabs) => {
    tabs.tree.find('.verticalTabs__tabs__tab__button').forEach((tab) => {
      // Handle on click
      tab.events.on('click', (e) => {
        // Cancel the event
        e.preventDefault();

        if (tab.css.contains('verticalTabs__tabs__tab-active')) {
          return;
        }

        // Change the panel and update aria values
        const panel = tab.attr('href');
        const active = tabs.tree.find('.verticalTabs__tabs__tab-active');
        active.aria.select(false);
        active.css.remove('verticalTabs__tabs__tab-active');
        tabs.tree.find('.verticalTabs__panel-active').css.remove('verticalTabs__panel-active');

        tab.aria.select();
        tab.tree.parent('.verticalTabs__tabs__tab').css.add('verticalTabs__tabs__tab-active');
        tabs.tree.find(panel).css.add('verticalTabs__panel-active')
      });
    });
  });
};

export default verticalTabs;
