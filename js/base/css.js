// @flow

/**
 * CSS helpers for UI nodes
 */
export default class CSS {
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
   * Add a CSS class to the given node
   *
   * @param {String} cssClass CSS class to add
   */
  add(cssClass: string) {
    this.list.add(cssClass);
  }

  /**
   * Return the list of CSS classes
   *
   * @return {DOMTokenList} List of CSS classes
   */
  get list(): DOMTokenList {
    return this.node.classList;
  }

  /**
   * Get or set the style of the node. If the argument is present, styles will be applied.
   * If not, this method will return the styles.
   *
   * @param {Object} styles Object with the styles to apply. The format is { 'property': 'value' }
   * @return {Object} The styles applied or the current ones.
   */
  style(styles: Object = {}): Object {
    if (Object.keys(styles).length === 0) {
      return this._styleStringToObject(this.node.getAttribute('style') || '');
    } else {
      this.node.setAttribute('style', this._styleObjectToString(styles));
      return styles;
    }
  }

  /**
   * Check if the current class is already present in the node
   *
   * @param {string} cssClass CSS class to remove
   */
  contains(cssClass: string) {
    this.list.contains(cssClass);
  }

  /**
   * Remove a CSS class to the given node
   *
   * @param {string} cssClass CSS class to remove
   */
  remove(cssClass: string) {
    this.list.remove(cssClass);
  }

  /**
   * Toggle a class for the given node
   *
   * @param {string} cssClass CSS class to toggle
   * @return {boolean} True if the class was added. False if it was removed
   */
  toggle(cssClass: string): boolean {
    const contains = this.list.contains(cssClass);
    contains ? this.remove(cssClass) : this.add(cssClass);
    return contains;
  }

  /**
   * Helper "private" methods
   */

  /**
   * Convert a string style into an object.
   *
   * @param {string} styles String with the styles from a node.
   * @return {Object} The object with the properties as keys and values
   */
  _styleStringToObject(styles: string): Object {
    const properties = styles.split(';');
    const computed = {};

    properties.forEach((prop) => {
      const rule = prop.split(':').map((s) => s.trim());
      computed[prop[0]] = prop[1];
    });

    return computed;
  };

  /**
   * Convert a object with CSS styles into a string to insert in a HTML element
   *
   * @param {Object} styles object with the properties as keys and values
   * @return {string} String with the styles from a node.
   */
  _styleObjectToString(styles: Object): string {
    const props = Object.keys(styles);
    let result = '';

    props.forEach((prop) => {
      const value = styles[prop];
      result += `${prop}: ${value};`;
    });

    return result;
  }
};
