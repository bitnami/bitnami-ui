import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Blockquote = props => {
  const { outstanding, className, color, children, ...attributes } = props;

  const css = cs(className, {
    outstanding,
    [color]: color != null,
  });

  return (
    <blockquote className={css} {...attributes}>
      {children}
    </blockquote>
  );
};

Blockquote.propTypes = {
  /**
   * Display the blockquote using a more visual way
   */
  outstanding: PropTypes.bool,
  /**
   * Other CSS classes for the component
   */
  className: PropTypes.string,
  /**
   * Change the color of the left border for non-outstanding blockquotes
   */
  color: PropTypes.oneOf(['accent', 'action', 'brand']),
  /**
   * The content of the Blockquote
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Blockquote.defaultProps = {
  outstanding: false,
  className: '',
  color: undefined,
  children: undefined,
};

export default Blockquote;
