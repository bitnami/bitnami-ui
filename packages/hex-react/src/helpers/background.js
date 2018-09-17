import PropTypes from 'prop-types';
import cs from 'classnames';

// Valid values for the propTypes
// @see https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_names.scss#L42
const backgroundValues = ['bitnami', 'accent', 'action', 'iron', 'dark', 'white'];

const gradientValues = ['brand', 'accent', 'action', 'light', 'danger'];
const gradientAngleValues = [45, 90, 135, 180, 225, 270];

export const validValues = [
  // Background
  ...backgroundValues,
  // Gradient colors
  ...gradientValues,
  // Angles
  ...gradientAngleValues,
];

// Defines the prop-types of spacing helpers
export const propTypes = {
  background: PropTypes.oneOf(backgroundValues),
  gradient: PropTypes.oneOf(gradientValues),
  gradientAngle: PropTypes.oneOf(gradientAngleValues),
};

// Keys
export const propKeys = Object.keys(propTypes);

// Default values for the props
export const defaultProps = {};

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
  validValues,
  propKeys,
  propTypes,
  defaultProps,
  propToClass,
};
