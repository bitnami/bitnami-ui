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

  /**
   * Read an attribute of the node or set it if the second parameter is present
   *
   * @param {string} attribute The attribute to get the value
   * @param {string} value (Optional) The value for the attribute.
   * @return {string|null} The value of the attribute
   */
  attr(attribute: string, value:?string = null): ?string {
    if (value != null) {
      this.node.setAttribute(attribute, value);
    } else {
      return this.node.getAttribute(attribute);
    }
  }

  /**
   * Get the current height (visible / hidden) of the node.
   * @see http://usefulangle.com/post/40/javascript-client-height-vs-offset-height-vs-scroll-height
   *
   * @return {number} The number of the height pixels
   */
  height(): number {
    return this.node.scrollHeight;
  }

  /**
   * Get the current height (visible) of the node.
   * @see http://usefulangle.com/post/40/javascript-client-height-vs-offset-height-vs-scroll-height
   *
   * @param {boolean} borders True if you want to include the borders in the calculation
   * @return {number} The number of the height pixels
   */
  visibleHeight(borders: boolean = true): number {
    return borders ? this.node.offsetHeight : this.node.clientHeight;
  }

  /**
   * Set the focus for this element
   */
  focus(): void {
    this.node.focus();
  }
}

export default UINode;
