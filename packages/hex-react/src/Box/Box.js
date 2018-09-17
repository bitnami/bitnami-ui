import React from 'react';
import WithHelpers, { Spacing, Typography, Background } from '../helpers';

// Outside the Box!
const Box = ({ children, ...others }) => <div {...others}>{children}</div>;

export default WithHelpers(Box, Spacing, Typography, Background);
