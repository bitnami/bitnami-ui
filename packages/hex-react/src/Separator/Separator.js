import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Separator = props => {
  const { size, className, margin, width, ...attributes } = props;

  const css = cs(className, {
    [`separator-${size}`]: size != null,
    [`margin-v-${margin}`]: margin != null,
    [`separator-${width}`]: width != null,
  });

  return React.createElement('hr', { className: css, ...attributes });
};

Separator.propTypes = {
  /**
   * Modify the height of the separator
   */
  size: PropTypes.oneOf(['small', 'big', 'bigger', 'enormous']),
  /**
   * Modify the vertical margin for the separator
   */
  margin: PropTypes.oneOf(['small', 'big', 'bigger', 'enormous', 'giant', 'huge']),
  /**
   * Modify the width (percentage) of the separator
   */
  width: PropTypes.oneOf(['15', '30', '50', '70']),
  /**
   * Other CSS classes to add to the component
   */
  className: PropTypes.string,
};

Separator.defaultProps = {
  size: undefined,
  margin: undefined,
  width: undefined,
  className: '',
};

export default Separator;
