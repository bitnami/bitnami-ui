/*!!
 * HEx - v{VERSION}
 *
 * The HEx design system is released under the Apache-2.0 license.
 * Copyright © 2018 BitRock Inc. (DBA Bitnami). The Bitnami names, logos and all product names
 * are trademarks of BitRock Inc.
 */

// Define global variables
window['HEX_VERSION'] = `v{VERSION}`;
window['HEX_INIT'] = false;

// Import components
import Accordion from './components/accordion';
import Carousel from './components/carousel';
import Header from './components/header';
import verticalTabs from './components/vertical-tabs';

// Export the B selector to window
import b from './base';
window['b'] = b;

// Initialize all elements
document.addEventListener('DOMContentLoaded', () => {
  Accordion();
  Carousel();
  Header();
  verticalTabs();
});
