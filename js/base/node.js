// Other helpers
import CSS from './css';
import Aria from './aria';
import Events from './events';
import Tree from './tree';

/**
 * A really simple wrapper over the native HTML node element. This class offers some helper methods
 * to work with accesbility.
 */
export class UINode {
  /**
   * Store the current node
   *
   * @param {HTMLNode} node Base node
   */
  constructor(node) {
    // Store the basic node.
    this.node = node;
    this.css = new CSS(node);
    this.aria = new Aria(node);
    this.events = new Events(node);
    this.tree = new Tree(node);
  }

  // Collection helpers for single nodes
  length() { return 1; }
  forEach(callback) { callback(this); }
  map(callback) { return [callback(this)]; }
}

export default (selector) => {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 1) {
    return new UINode(elements[0]);
  } else {
    const uiNodes = [];
    elements.forEach((el) => uiNodes.push(new UINode(el)));
    return uiNodes;
  }
}
