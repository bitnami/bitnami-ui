import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Anchor = props => {
  const {
    external,
    noReferrer,
    inverse,
    secondary,
    noUnderline,
    className,
    children,
    href,
    ...attributes
  } = props;

  const rel = cs({
    noopener: external === true,
    noreferrer: noReferrer === true,
  });

  const css = cs(className, {
    inverse: inverse === true,
    secondary: secondary === true,
    'no-decoration': noUnderline === true,
  });

  return React.createElement(
    'a',
    {
      href,
      className: css !== '' ? css : null,
      rel: rel !== '' ? rel : null,
      target: external === true ? '_blank' : null,
      ...attributes,
    },
    children,
  );
};

Anchor.propTypes = {
  /**
   * URL or hash for the anchor
   */
  href: PropTypes.string,
  /**
   * Open the anchor in a new tab. It adds the "noopener" protection
   */
  external: PropTypes.bool,
  /**
   * Disable the referrer header during the navigation
   */
  noReferrer: PropTypes.bool,
  /**
   * Use a light color. Ideal for dark backgrounds
   */
  inverse: PropTypes.bool,
  /**
   * Use the brand color for the anchor
   */
  secondary: PropTypes.bool,
  /**
   * Remove the underline for the anchor
   */
  noUnderline: PropTypes.bool,
  /**
   * Other CSS classes for the component
   */
  className: PropTypes.string,
  /**
   * Any element that will be wrapped by the Box
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Anchor.defaultProps = {
  href: '',
  external: false,
  noReferrer: false,
  inverse: false,
  secondary: false,
  noUnderline: false,
  className: '',
  children: undefined,
};

export default Anchor;
