import PropTypes from 'prop-types';
import cs from 'classnames';

// Valid values for the propTypes
// @see https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_names.scss#L42
export const validValues = [1, 2, 3, 4, 5];

// Defines the prop-types of spacing helpers
export const propTypes = {
  shadow: PropTypes.number,
};

// Keys
export const propKeys = Object.keys(propTypes);

// Default values for the props
export const defaultProps = {};

/**
 * Function that maps the value to the actual CSS class
 *
 * @param {Object} shadow level of the shadow
 * @return {String} CSS classes to add to the child.
 */
export const propToClass = ({ shadow }) => {
  const availableProps = {
    [`shadow-${shadow}`]: shadow != null,
  };

  return cs('', availableProps);
};

export default {
  validValues,
  propKeys,
  propTypes,
  defaultProps,
  propToClass,
};
