import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Blockquote = ({ outstanding, className, children, ...htmlProps }) => {
  const css = cs(className, { outstanding });

  return (
    <blockquote className={css} {...htmlProps}>
      {children}
    </blockquote>
  );
};

Blockquote.propTypes = {
  outstanding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  htmlProps: PropTypes.object,
};

Blockquote.defaultProps = {
  outstanding: false,
  className: '',
  children: undefined,
  htmlProps: {},
};

export default Blockquote;
