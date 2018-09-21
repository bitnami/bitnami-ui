import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { Spacing, Background, Shadow, cleanProps } from '../helpers';

/**
 * Box is the most basic block component of the library. It acts as a simple wrapper (`div`, `article`, ...)
 * but includes all the spacing, background and shadow helpers.
 */
const Box = props => {
  const { className, children, type, ...attributes } = props;

  // Setup the proper CSS classes and clean the props
  const helpers = [Spacing, Background, Shadow];
  const helperClasses = cs(className, ...helpers.map(h => h.propToClass(attributes)));
  const remainingProps = cleanProps(attributes, ...helpers);

  return React.createElement(
    type,
    {
      className: helperClasses,
      ...remainingProps,
    },
    children,
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
   * Set the HTML tag that will be rendered
   */
  type: PropTypes.oneOf(['div', 'section', 'article', 'main']),
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
   * Setup the margin-left and right as auto
   */
  marginC: PropTypes.bool,
  /**
   * Set the top margin
   */
  marginT: PropTypes.oneOf(spacingValues),
  /**
   * Set the bottom margin
   */
  marginB: PropTypes.oneOf(spacingValues),
  /**
   * Set the left margin
   */
  marginL: PropTypes.oneOf(spacingValues),
  /**
   * Set the right margin
   */
  marginR: PropTypes.oneOf(spacingValues),
  /**
   * Set the vertical margin (top and bottom)
   */
  marginV: PropTypes.oneOf(spacingValues),
  /**
   * Set the horizontal margin (left and right)
   */
  marginH: PropTypes.oneOf(spacingValues),
  /**
   * Set the top padding
   */
  paddingT: PropTypes.oneOf(spacingValues),
  /**
   * Set the bottom padding
   */
  paddingB: PropTypes.oneOf(spacingValues),
  /**
   * Set the left padding
   */
  paddingL: PropTypes.oneOf(spacingValues),
  /**
   * Set the right padding
   */
  paddingR: PropTypes.oneOf(spacingValues),
  /**
   * Set the vertical padding (top and bottom)
   */
  paddingV: PropTypes.oneOf(spacingValues),
  /**
   * Set the horizontal padding (left and right)
   */
  paddingH: PropTypes.oneOf(spacingValues),
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
  /* eslint-enable react/no-unused-prop-types */
};

Box.defaultProps = {
  type: 'div',
  className: '',
  children: undefined,
  marginC: undefined,
  marginT: undefined,
  marginB: undefined,
  marginL: undefined,
  marginR: undefined,
  marginV: undefined,
  marginH: undefined,
  paddingT: undefined,
  paddingB: undefined,
  paddingL: undefined,
  paddingR: undefined,
  paddingV: undefined,
  paddingH: undefined,
  shadow: undefined,
  background: undefined,
  gradient: undefined,
  gradientAngle: undefined,
};

export default Box;
