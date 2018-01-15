/*!
 * Bitnami UI - v{VERSION}
 *
 * This is the main javascript file of Bitnami Pattern lib. It contains all
 * the required JS code for interacting with the library. It's written in
 * pure JS.
 *
 * ----------------
 *
 */

// Define global variables
window.BITNAMI_UI_VERSION = 'v{VERSION}';
window.BITNAMI_UI_INIT = false;

// Import components
import Accordion from './components/accordion';
import Carousel from './components/carousel';
import Header from './components/header';

// Export the B selector to window
import b from './base';
window.b = b;

// Initialize all elements
document.addEventListener('DOMContentLoaded', () => {
  Accordion();
  Carousel();
  Header();
});
