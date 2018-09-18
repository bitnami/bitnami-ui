import React from 'react';
import PropTypes from 'prop-types';
import WithHelpers, { Spacing, Typography, Background, Shadow } from '../helpers';

// Outside the Box!
export const Box = ({ children, ...others }) => <div {...others}>{children}</div>;

Box.propTypes = {
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Box.defaultProps = {
  children: undefined,
};

export default WithHelpers(Box, Spacing, Typography, Background, Shadow);
