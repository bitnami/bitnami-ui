import cs from 'classnames';

// Prop keys to cleanup. More elements are append below
const propKeys = ['marginCenter'];

// Valid values for the propTypes
// @see https://github.com/bitnami/hex/blob/master/packages/hex-core/src/variables/_names.scss#L42
const validValues = [
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

propSuffixes.forEach(k => {
  propKeys.push(`margin${k}`);
  propKeys.push(`padding${k}`);
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

// Export propKeys too
export { propKeys };

export default {
  propKeys,
  propToClass,
};
