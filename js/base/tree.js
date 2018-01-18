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
   * Get children nodes.
   *
   * @return {UINode[]} Target nodes
   */
  children() {
    // HTMLCollection doesn't implement forEach nor map. We need to convert it to an array.
    return Array.from(this.node.children).map((el) => new UINode(el));
  }

  /**
   * Get the index of the current element in the parent
   *
   * @return {number} The index of the element in the parent
   */
  indexOnParent(): number {
    // TODO: Allow parent to receive a selector
    const parentChildren = this.parent().tree.children().map((el) => el.node);
    return parentChildren.indexOf(this.node);
  }

  /**
   * Find an element in the hierarchy
   *
   * @param {string} selector CSS selector to find
   * @return {UINode|UINode[]} Target node or nodes
   */
  find(selector) {
    const elements = this.node.querySelectorAll(selector);
    return elements.length === 1 ?
      new UINode(elements[0]) :
      Array.from(elements).map((el) => new UINode(el));
  }

  /**
   * Get the parent node.
   *
   * @param {string} selector CSS selector to find in upper hierarchy
   * @return {UINode|null} Target node
   */
  parent(selector: string = ''): UINode|null {
    if (selector == '') {
      return new UINode(this.node.parentElement);
    }
    // Iterate in the hierarchy
    let parent = this.node.parentElement;
    while(parent != null && !parent.matches(selector)) {
      parent = parent.parentElement;
    }
    return parent ? new UINode(parent) : null;
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
