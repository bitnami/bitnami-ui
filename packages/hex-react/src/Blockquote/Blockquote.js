import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import WithHelpers, { Spacing, Typography } from '../helpers';

const Blockquote = ({ outstanding, className, children, ...attributes }) => {
  const css = cs(className, { outstanding });

  return (
    <blockquote className={css} {...attributes}>
      {children}
    </blockquote>
  );
};

Blockquote.propTypes = {
  outstanding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Blockquote.defaultProps = {
  outstanding: false,
  className: '',
  children: undefined,
};

export default WithHelpers(Blockquote, Spacing, Typography);
