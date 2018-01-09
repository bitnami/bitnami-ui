/**
 * Helpers for accesibility.
 *
 * @see https://www.w3.org/TR/wai-aria-1.1/
 */
export default class Aria {
  /**
   * Store the current node
   *
   * @param {HTMLNode} node Base node
   */
  constructor(node) {
    // Store the basic node.
    this.node = node;
  }

  /**
   * Set the aria-expanded attribute of a node element
   *
   * @param {boolean} status Set the open status
   */
  expand(status) {
    this.node.setAttribute('aria-expanded', status);
  }
}
