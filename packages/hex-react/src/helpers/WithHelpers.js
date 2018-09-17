import React from 'react';
import cs from 'classnames';
import { merge, cleanProps } from '.';

/**
 * HOC to wrap components into helpers!
 */
const WithHelpers = (Component, ...helpers) => {
  Component.propTypes = merge(Component.propTypes || {}, ...helpers.map(h => h.propTypes));
  Component.defaultProps = merge(Component.defaultProps || {}, ...helpers.map(h => h.defaultProps));

  // Generate the new class
  return function WithHelpersHOC(props) {
    const { className, children } = props;
    const helperClasses = cs(className, ...helpers.map(h => h.propToClass(props)));
    const remainingProps = cleanProps(props, ...helpers);
    return (
      <Component className={helperClasses} {...remainingProps}>
        {children}
      </Component>
    );
  };
};

export default WithHelpers;
