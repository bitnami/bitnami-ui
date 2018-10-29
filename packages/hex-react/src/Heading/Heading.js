import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Heading = props => {
  const { level, className, subtitle, inverse, children, ...attributes } = props;

  const css = cs(className, {
    subtitle,
    inverse,
  });

  return React.createElement(
    `h${level}`,
    {
      className: css,
      ...attributes,
    },
    children,
  );
};

Heading.propTypes = {
  /**
   * Set the level of the heading
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Show it as a subtitle (blue color)
   */
  subtitle: PropTypes.bool,
  /**
   * Use a light color. Ideal for dark backgrounds
   */
  inverse: PropTypes.bool,
  /**
   * Other CSS classes for the component
   */
  className: PropTypes.string,
  /**
   * Any element that will be wrapped by the Heading
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Heading.defaultProps = {
  level: 1,
  subtitle: false,
  inverse: false,
  className: '',
};

export default Heading;
