import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { merge, cleanProps, Spacing } from '../helpers';

const Blockquote = ({ outstanding, className, children, ...attributes }) => {
  const css = cs(className, { outstanding }, Spacing.propToClass(attributes));

  return (
    <blockquote className={css} {...cleanProps(attributes, Spacing)}>
      {children}
    </blockquote>
  );
};

Blockquote.propTypes = merge(
  {
    outstanding: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    attributes: PropTypes.object,
  },
  Spacing.propTypes,
);

Blockquote.defaultProps = merge(
  {
    outstanding: false,
    className: '',
    children: undefined,
    attributes: {},
  },
  Spacing.defaultProps,
);

export default Blockquote;
