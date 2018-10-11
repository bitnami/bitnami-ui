import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Column = props => {
  const { align, span, className, type, children, ...attributes } = props;

  const css = cs(className, `col-${span}`, {
    [`align-${align}`]: align != null,
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

Column.propTypes = {
  /**
   * Set the HTML tag that will be rendered
   */
  type: PropTypes.oneOf(['div', 'section', 'article', 'main']),
  /**
   * Define the space the column takes in the parent row. By default, 12 is the max.
   */
  span: PropTypes.number.isRequired,
  /**
   * Vertical alignment for the column in the row.
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * Other CSS classes for the component
   */
  className: PropTypes.string,
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Column.defaultProps = {
  type: 'div',
  align: undefined,
  className: '',
  children: undefined,
};

export default Column;
