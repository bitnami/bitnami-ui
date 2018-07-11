// @flow

// UI node class
import UINode from './node';

/**
 * Selector method of Bitnami UI. It uses querySelectorAll under the hood and initialize
 * a UINode class per element.
 *
 * @param {string|HTMLElement} selector CSS or the direct node
 * @return {UINode|UINode[]} The initialized UI Node. It can be an array of elements.
 */
export default (selector: string | HTMLElement): UINode | Array<UINode> => {
  if (selector instanceof HTMLElement) {
    return new UINode(selector);
  } else {
    const elements = document.querySelectorAll(selector);
    return elements.length === 1 ?
      new UINode(elements[0]) :
      Array.from(elements).map((el) => new UINode(el));
  }
}
