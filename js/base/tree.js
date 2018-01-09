// Node base
import { UINode } from './node';

/**
 * Helpers to navigate to the DOM Tree
 */
export default class Tree {
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
   * Get the parent node.
   *
   * @return {UINode} Target node
   */
  parent() {
    return new UINode(this.node.parentElement);
  }

  /**
   * Get the next node.
   *
   * @return {UINode} Target node
   */
  next() {
    return new UINode(this.node.nextElementSibling);
  }

  /**
   * Get the previous node.
   *
   * @return {UINode} Target node
   */
  prev() {
    return new UINode(this.node.previousElementSibling);
  }
}
