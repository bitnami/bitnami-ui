/**
 * CSS helpers for UI nodes
 */
export default class CSS {
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
   * Return the list of CSS classes
   *
   * @return {DOMTokenList} List of CSS classes
   */
  get list() {
    return this.node.classList;
  }

  /**
   * Add a CSS class to the given node
   *
   * @param {String} cssClass CSS class to add
   */
  add(cssClass) {
    this.list.add(cssClass);
  }

  /**
   * Check if the current class is already present in the node
   *
   * @param {String} cssClass CSS class to remove
   */
  contains(cssClass) {
    this.list.contains(cssClass);
  }

  /**
   * Remove a CSS class to the given node
   *
   * @param {String} cssClass CSS class to remove
   */
  remove(cssClass) {
    this.list.remove(cssClass);
  }

  /**
   * Toggle a class for the given node
   *
   * @param {String} cssClass CSS class to toggle
   * @return {boolean} True if the class was added. False if it was removed
   */
  toggle(cssClass) {
    return this.list.contains(cssClass) ?
      this.remove(cssClass) && false :
      this.add(cssClass) && true;
  }
};
