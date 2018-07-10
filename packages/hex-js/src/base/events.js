/**
 * Helpers for events.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
export default class Events {
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
   * Attach an event listener
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   *
   * @param {string} event Event identifier
   * @param {function} callback Callback for the event
   * @param {object} options Option arguments.
   */
  on(event, callback, options) {
    this.node.addEventListener(event, callback, options);
  }

  /**
   * Detach an event listener
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   *
   * @param {string} event Event identifier
   * @param {function} callback Callback for the event
   * @param {object} options Option arguments.
   */
  off(event, callback, options) {
    this.node.removeEventListener(event, callback, options);
  }

  /**
   * Trigger an event
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
   *
   * @param {string} event Event
   * @return {boolean} False if the event is cancellable and some of the listeners called to
   *    preventDefault.
   */
  trigger(event) {
    return this.node.dispatchEvent(new Event(event));
  }
}
