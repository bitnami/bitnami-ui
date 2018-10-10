import cs from 'classnames';

// Prop keys to cleanup
export const propKeys = ['fontSize', 'color', 'weight', 'textTransform', 'textAlign'];

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
    availableProps[`text-${textAlign.charAt(0).toLowerCase()}`] = true;
  }

  return cs('', availableProps);
};

export default {
  propKeys,
  propToClass,
};
