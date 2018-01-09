/*!
 * Bitnami UI - v{VERSION}
 *
 * This is the main javascript file of Bitnami Pattern lib. It contains all
 * the required JS code for interacting with the library. It's written in
 * pure JS.
 */

// Define global variables
window.BITNAMI_UI_VERSION = 'v{VERSION}';
window.BITNAMI_UI_INIT = false;

// Import components
import Header from './components/header';

// Initialize all elements
document.addEventListener('DOMContentLoaded', () => {
  Header();
});
