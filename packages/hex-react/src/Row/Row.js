import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

// Constant with the different breakpoints for collapsing rows
const breakpoints = ['phone', 'phone-land', 'tablet', 'desktop', 'wide'];

class Row extends React.Component {
  /**
   * Generates the correct CSS classes for the given breakpoint index and the number of columns
   *
   * @param {integer} index Index of the breakpoint in the collapse array
   * @param {integer} columns Number of columns to collapse for this breakpoint
   */
  static collapseBreakpoint(index, columns) {
    const bp = breakpoints[index];
    // Only use `on` for phone breakpoint
    const scope = index === 0 ? 'on' : 'b';
    return columns === 1 ? `collapse-${scope}-${bp}` : `collapse-${columns}-${scope}-${bp}`;
  }

  /**
   * Generate the correct CSS classes for responsive design based on the props array.
   *
   * @param {integer[]} collapse Array of columns. The index will be used as breakpoints
   */
  collapseCss(collapse) {
    let collapseCss = '';

    collapse.forEach((current, i) => {
      const prev = collapse[i - 1];
      const next = collapse[i + 1];

      if ((prev == null && next == null) || next !== current) {
        collapseCss = `${collapseCss} ${this.constructor.collapseBreakpoint(i, current)}`;
      }
    });

    return collapseCss;
  }

  render() {
    const { align, reverse, collapse, className, type, children, ...attributes } = this.props;

    const collapseClasses = this.collapseCss(collapse);
    const css = cs(className, 'row', collapseClasses, {
      [`align-${align}`]: align != null,
      'row-reverse': reverse === true,
    });

    return React.createElement(
      type,
      {
        className: css,
        ...attributes,
      },
      children,
    );
  }
}

Row.propTypes = {
  /**
   * Set the HTML tag that will be rendered
   */
  type: PropTypes.oneOf(['div', 'section', 'article', 'main']),
  /**
   * Align vertically the inner columns. This is based on flex properties.
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * Collapse columns at certain breakpoint.
   */
  collapse: PropTypes.arrayOf(PropTypes.number),
  /**
   * Reverse the order of the inner columns. It's useful to swap content for odd or even rows.
   */
  reverse: PropTypes.bool,
  /**
   * Other CSS classes for the component
   */
  className: PropTypes.string,
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Row.defaultProps = {
  type: 'div',
  align: undefined,
  className: '',
  collapse: [],
  reverse: false,
  children: undefined,
};

export default Row;
