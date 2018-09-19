import cs from 'classnames';

// Prop keys to cleanup
export const propKeys = ['background', 'gradient', 'gradientAngle'];

/**
 * Function that maps the value to the actual CSS class
 *
 * @param {Object} props Props received by the component
 * @return {String} CSS classes to add to the child.
 */
export const propToClass = ({ background, gradient, gradientAngle }) =>
  cs('', {
    [`bg-${background}`]: background != null,
    [`gradient-${gradient}`]: gradient != null,
    [`gradient-${gradientAngle}-${gradient}`]: gradient != null && gradientAngle != null,
  });

export default {
  propKeys,
  propToClass,
};
