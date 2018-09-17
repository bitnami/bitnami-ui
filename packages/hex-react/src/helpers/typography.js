import PropTypes from 'prop-types';
import cs from 'classnames';

// Valid values for the propTypes
// @see https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_names.scss#L42
const sizeValues = ['tiny', 'small', 'normal', 'big', 'bigger', 'enormous', 'giant', 'huge'];

const colorValues = ['brand', 'accent', 'accent-light', 'iron', 'action', 'white', 'light-blue'];

const weightValues = ['light', 'regular', 'bold'];

const transformValues = ['uppercase', 'capitalize'];

const alignmentValues = ['left', 'center', 'right'];

export const validValues = [
  // Size
  ...sizeValues,
  // Color
  ...colorValues,
  // Weight
  ...weightValues,
  // Transform
  ...transformValues,
  // Alignment
  ...alignmentValues,
];

// Defines the prop-types of spacing helpers
export const propTypes = {
  fontSize: PropTypes.oneOf(sizeValues),
  color: PropTypes.oneOf(colorValues),
  weight: PropTypes.oneOf(weightValues),
  textTransform: PropTypes.oneOf(transformValues),
  textAlign: PropTypes.oneOf(alignmentValues),
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
export const propToClass = ({ fontSize, color, weight, textTransform, textAlign }) => {
  const availableProps = {
    [`type-${fontSize}`]: fontSize != null,
    [`type-color-${color}`]: color != null,
    [`type-${weight}`]: weight != null,
    [`type-${textTransform}`]: textTransform != null,
  };

  if (textAlign != null) {
    availableProps[`text-${textAlign.charAt(0).toLowercase()}`] = true;
  }

  return cs('', availableProps);
};

export default {
  validValues,
  propKeys,
  propTypes,
  defaultProps,
  propToClass,
};
