// @flow

/**
 * Helpers for accesibility.
 *
 * @see https://www.w3.org/TR/wai-aria-1.1/
 */
export default class Aria {
  // Properties
  node: HTMLElement;

  /**
   * Store the current node
   *
   * @param {HTMLElement} node Base node
   */
  constructor(node: HTMLElement) {
    // Store the basic node.
    this.node = node;
  }

  /**
   * Set the value of the aria-expanded attribute of a node element
   *
   * @param {boolean} status Set the open status
   */
  expand(status: boolean = true) {
    this.node.setAttribute('aria-expanded', String(status));
  }

  /**
   * Set the value of the aria-label attribute for a node element
   *
   * @param {string} label Label to set
   */
  label(label: string) {
    this.node.setAttribute('aria-label', label);
  }

  /**
   * Set the value of the aria-selected attribute of the node element
   *
   * @param {boolean} selected True if the element is selected. True by default
   */
  select(selected:boolean = true) {
    this.node.setAttribute('aria-selected', String(selected));
  }

  /**
   * Set the value of the aria-hidden attribute of the node element
   *
   * @param {boolean} show True if the element is shown. True by default
   */
  show(show:boolean = true) {
    this.node.setAttribute('aria-hidden', String(!show));
  }
}
