import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Grid = props => {
  const { size, className, type, children, ...attributes } = props;

  const css = cs(className, 'container', {
    [`container-${size}`]: size != null,
  });

  return React.createElement(
    type,
    {
      className: css,
      ...attributes,
    },
    children,
  );
};

Grid.propTypes = {
  /**
   * Set the HTML tag that will be rendered
   */
  type: PropTypes.oneOf(['div', 'section', 'article', 'main']),
  /**
   * Set the max-width of the grid
   */
  size: PropTypes.oneOf(['tiny', 'small', 'fluid']),
  /**
   * Other CSS classes for the component
   */
  className: PropTypes.string,
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Grid.defaultProps = {
  type: 'div',
  size: undefined,
  className: '',
  children: undefined,
};

export default Grid;
