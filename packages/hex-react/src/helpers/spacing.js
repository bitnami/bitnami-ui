import PropTypes from 'prop-types';
import cs from 'classnames';

// Valid values for the propTypes
// @see https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_names.scss#L42
export const validValues = [
  'reset',
  'tiny',
  'small',
  'normal',
  'big',
  'bigger',
  'enormous',
  'giant',
  'huge',
];

// Suffixes for the props
const propSuffixes = ['Top', 'Bottom', 'Left', 'Right', 'Horizontal', 'Vertical'];

// Defines the prop-types of spacing helpers
export const propTypes = {
  marginCenter: PropTypes.bool,
  marginVerticalCenter: PropTypes.bool,
};

// Keys
export const PropKeys = Object.assign(propTypes);

// Default values for the props
export const defaultProps = {};

// Iterate over the suffixes to generate the correct props, defaults and cssToProps
propSuffixes.forEach(k => {
  // propTypes
  propTypes[`margin${k}`] = PropTypes.oneOf(validValues);
  propTypes[`padding${k}`] = PropTypes.oneOf(validValues);
});

/**
 * Function that maps the value to the actual CSS class
 *
 * @param {Object} props Props received by the component
 * @return {String} CSS classes to add to the child.
 */
export const propToClass = props => {
  const availableProps = {};

  // cssToProps
  propSuffixes.forEach(k => {
    const charIdentifier = k.charAt(0).toLowerCase();
    validValues.forEach(v => {
      availableProps[`margin-${charIdentifier}-${v}`] = props[`margin${k}`] === v;
      availableProps[`padding-${charIdentifier}-${v}`] = props[`padding${k}`] === v;
    });
  });

  return cs('', availableProps);
};

export default {
  validValues,
  propTypes,
  defaultProps,
  propToClass,
};
