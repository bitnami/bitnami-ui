/**
 * Modify the content of the node.
 */
export default class HMTL {
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
   * Replace the current HTML with the given one
   *
   * @param {string} html HTML to replace
   */
  replace(html) {
    this.node.innerHTML = html;
  }
}
