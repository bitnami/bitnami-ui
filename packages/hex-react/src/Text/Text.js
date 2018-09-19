import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { Typography, cleanProps } from '../helpers';

// Outside the Box!
const Text = props => {
  const { className, children, type } = props;

  // Setup the proper CSS classes and clean the props
  const helperClasses = cs(className, Typography.propToClass(props));
  const remainingProps = cleanProps(props, Typography);

  return React.createElement(
    type,
    {
      className: helperClasses,
      ...remainingProps,
    },
    children,
  );
};

Text.propTypes = {
  /**
   * Set the HTML tag that will be rendered
   */
  type: PropTypes.oneOf(['p', 'span', 'div', 'test']),
  /**
   * Base CSS class for the component
   */
  className: PropTypes.string,
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /* eslint-disable react/no-unused-prop-types */
  /**
   * Set the font size
   */
  fontSize: PropTypes.oneOf([
    'tiny',
    'small',
    'normal',
    'big',
    'bigger',
    'enormous',
    'giant',
    'huge',
  ]),
  /**
   * Set the color of the text
   */
  color: PropTypes.oneOf([
    'brand',
    'accent',
    'accent-light',
    'iron',
    'action',
    'white',
    'light-blue',
  ]),
  /**
   * Set the font weight
   */
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  /**
   * Apply a text transformation to the text
   */
  textTransform: PropTypes.oneOf(['uppercase', 'capitalize']),
  /**
   * Set the text alignment
   */
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  /* eslint-enable react/no-unused-prop-types */
};

Text.defaultProps = {
  type: 'p',
  className: '',
  children: undefined,
  fontSize: 'normal',
  color: undefined,
  weight: 'regular',
  textTransform: undefined,
  textAlign: 'left',
};

export default Text;
