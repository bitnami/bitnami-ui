import cs from 'classnames';

// Prop keys to cleanup
export const propKeys = ['shadow'];

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
  propKeys,
  propToClass,
};
