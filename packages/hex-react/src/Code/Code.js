import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'lowlight/lib/core';
import Indent from 'detect-indent';

/**
 * The usage of Lowlight in this component is inspired by https://github.com/rexxars/react-lowlight/
 */
class Code extends React.Component {
  constructor(props) {
    super(props);

    // Bind
    this._mapChildren = this._mapChildren.bind(this);
  }

  /**
   * Convert HighlightJS nodes from Lowlight into React component definitions.
   *
   * @param {object} child HighlightJS node from Lowlight
   * @param {number} i Index of the element in the array
   * @param {number} depth Current depth. This is a recursive method
   */
  _mapChildren(child, i, depth = 0) {
    if (child.tagName) {
      return React.createElement(
        child.tagName,
        Object.assign({ key: `lo-${depth}-${i}` }, child.properties),
        child.children && child.children.map((c, j) => this._mapChildren(c, j, depth + 1)),
      );
    }

    return child.value;
  }

  /**
   * Takes the string code set as children and remove the extra indentation due to JSX. It also
   * removes the initial and the final line if they are empty.
   */
  _cleanCode() {
    const { children } = this.props;
    const indentation = Indent(children);
    let minIndent;
    const split = children.split('\n');

    // Remove first line if empty
    if (split[0] === '') {
      split.splice(0, 1);
    }

    // Remove last line if empty
    if (/^\s*$/.test(split[split.length - 1])) {
      split.splice(split.length - 1, 1);
    }

    if (split.length === 1) {
      minIndent = 0;
    } else {
      // Get the minimium indentation. That will be indentation in the JSX file
      split.forEach(line => {
        const { length } = line.match(/^\s*/)[0];
        // Ignore empty lines
        if (line !== '' && (minIndent == null || length < minIndent)) {
          minIndent = length;
        }
      });
    }

    let regexp;

    // Create the regexp to the initial indentation based on the type
    if (indentation.type === 'tab') {
      regexp = new RegExp(`^[\t]{${minIndent}}`, 'mg');
    } else {
      regexp = new RegExp(`^[ ]{${minIndent}}`, 'mg');
    }

    // Join again and remove
    return split.join('\n').replace(regexp, '');
  }

  render() {
    const { highlight, language, className, inline, disableIndent, children } = this.props;
    const childrenCode = inline || disableIndent ? children : this._cleanCode();

    // Highlight the code and format it as React component definitions
    let value;

    if (highlight) {
      const ast =
        language === 'auto'
          ? Lowlight.highlightAuto(childrenCode).value
          : Lowlight.highlight(language, childrenCode).value;

      value =
        ast.length === 0 ? childrenCode : ast.map((child, i) => this._mapChildren(child, i, 0));
    } else {
      value = childrenCode;
    }

    // Inner code tag
    const code = React.createElement('code', {}, value);

    // Display the code for inline or wrap into a pre for blocks
    return inline ? code : React.createElement('pre', { className }, code);
  }
}

Code.propTypes = {
  /**
   * Enable syntax highlighting
   */
  highlight: PropTypes.bool,
  /**
   * Set the language of the code. Use `auto` for autodetection
   */
  language: PropTypes.string,
  /**
   * Base CSS class for the component
   */
  className: PropTypes.string,
  /**
   * String with the actual code we want to highlight
   */
  children: PropTypes.string.isRequired,
  /**
   * Display the code inline
   */
  inline: PropTypes.bool,
  /**
   * Disable the fix of the JSX indentation in the `pre` code block
   */
  disableIndent: PropTypes.bool,
};

Code.defaultProps = {
  highlight: true,
  language: 'auto',
  inline: false,
  className: '',
  disableIndent: false,
};

// Register new languages and other language utilities
Code.registerLanguage = Lowlight.registerLanguage;
Code.hasLanguage = lang => !!Lowlight.getLanguage(lang);

export default Code;
