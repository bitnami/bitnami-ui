/**
 * Mobile helpers. Most of these methods are used for responsive purpose.
 */

// Determine if the current device is a touch device
export const touchDevice = ("ontouchstart" in document.documentElement);

export default {
  touchDevice
};
