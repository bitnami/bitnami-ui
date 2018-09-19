import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { Spacing, Background, Shadow, cleanProps } from '../helpers';

// Outside the Box!
const Box = props => {
  const { className, children } = props;

  // Setup the proper CSS classes and clean the props
  const helpers = [Spacing, Background, Shadow];
  const helperClasses = cs(className, ...helpers.map(h => h.propToClass(props)));
  const remainingProps = cleanProps(props, ...helpers);

  return (
    <div className={helperClasses} {...remainingProps}>
      {children}
    </div>
  );
};

// Values for spacing
const spacingValues = [
  'reset',
  'tiny',
  'small',
  'normal',
  'big',
  'bigger',
  'enormous',
  'giant',
  'huge',
];

Box.propTypes = {
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Setup the margin-left and right as auto
   */
  marginCenter: PropTypes.bool,
  /**
   * Set the top margin
   */
  marginTop: PropTypes.oneOf(spacingValues),
  /**
   * Set the bottom margin
   */
  marginBottom: PropTypes.oneOf(spacingValues),
  /**
   * Set the left margin
   */
  marginLeft: PropTypes.oneOf(spacingValues),
  /**
   * Set the right margin
   */
  marginRight: PropTypes.oneOf(spacingValues),
  /**
   * Set the vertical margin (top and bottom)
   */
  marginVertical: PropTypes.oneOf(spacingValues),
  /**
   * Set the horizontal margin (left and right)
   */
  marginHorizontal: PropTypes.oneOf(spacingValues),
  /**
   * Set the top padding
   */
  paddingTop: PropTypes.oneOf(spacingValues),
  /**
   * Set the bottom padding
   */
  paddingBottom: PropTypes.oneOf(spacingValues),
  /**
   * Set the left padding
   */
  paddingLeft: PropTypes.oneOf(spacingValues),
  /**
   * Set the right padding
   */
  paddingRight: PropTypes.oneOf(spacingValues),
  /**
   * Set the vertical padding (top and bottom)
   */
  paddingVertical: PropTypes.oneOf(spacingValues),
  /**
   * Set the horizontal padding (left and right)
   */
  paddingHorizontal: PropTypes.oneOf(spacingValues),
  /**
   * Display a shadow. The level represents the visual elevation
   */
  shadow: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /**
   * Setup a background. It's based on the styleguide colors
   */
  background: PropTypes.oneOf(['brand', 'accent', 'action', 'iron', 'dark', 'white']),
  /**
   * Setup a gradient background. It's based on the styleguide gradients
   */
  gradient: PropTypes.oneOf(['brand', 'accent', 'action', 'light', 'danger']),
  /**
   * Setup a different angle for the gradient
   */
  gradientAngle: PropTypes.oneOf([45, 90, 135, 180, 225, 270]),
};

Box.defaultProps = {
  children: undefined,
  marginCenter: undefined,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  marginVertical: undefined,
  marginHorizontal: undefined,
  paddingTop: undefined,
  paddingBottom: undefined,
  paddingLeft: undefined,
  paddingRight: undefined,
  paddingVertical: undefined,
  paddingHorizontal: undefined,
  shadow: undefined,
  background: undefined,
  gradient: undefined,
  gradientAngle: undefined,
};

export default Box;
