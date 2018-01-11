// @flow

// Other helpers
import CSS from './css';
import Aria from './aria';
import Events from './events';
import Tree from './tree';
import HTML from './html';

/**
 * A really simple wrapper over the native HTML node element. This class offers some helper methods
 * to work with accesbility.
 */
export class UINode {
  // Properties
  node: HTMLElement;
  css: CSS;
  aria: Aria;
  events: Events;
  tree: Tree;
  html: HTML;
  length: number;

  /**
   * Store the current node
   *
   * @param {HTMLElement} node Base node
   */
  constructor(node: HTMLElement) {
    // Store the basic node.
    this.node = node;
    this.css = new CSS(node);
    this.aria = new Aria(node);
    this.events = new Events(node);
    this.tree = new Tree(node);
    this.html = new HTML(node);
    this.length = 1;
  }

  // Collection helpers for single nodes
  forEach(callback: ((UINode) => void)): void {
    callback(this);
  }

  map(callback: ((UINode) => any)): Array<any> {
    return [callback(this)];
  }
}

export default UINode;
