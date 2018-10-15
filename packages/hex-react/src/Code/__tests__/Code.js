import React from 'react';
import { shallow } from 'enzyme';

// Code block
import js from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';

import Code from '../Code';

// Register new languages
Code.registerLanguage('js', js);
Code.registerLanguage('ruby', ruby);

describe('Code', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Code language="js">const test = 1;</Code>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders multiline correctly', () => {
    const wrapper = shallow(
      <Code language="js">
        {`
          const test = 1;
          const f = (t) => t + 1;
        `}
      </Code>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('register languages correctly', () => {
    expect(Code.hasLanguage('ruby')).toBe(true);
  });

  it('indents the code correctly', () => {
    const wrapper = shallow(
      <Code language="js">
        {`
          const test = 1;
          const f = (t) => t + 1;
        `}
      </Code>,
    );
    const expected = `const test = 1;\nconst f = (t) => t + 1;`;
    expect(wrapper.text()).toEqual(expected);
  });

  it('can disable auto-indentation', () => {
    const wrapper = shallow(
      <Code language="js" disableIndent>
        {`
          const test = 1;
          const f = (t) => t + 1;
        `}
      </Code>,
    );
    const expected = `const test = 1;\nconst f = (t) => t + 1;`;
    expect(wrapper.text()).not.toEqual(expected);
  });

  it('adds pre to blocks', () => {
    const wrapper = shallow(<Code language="js">const test = 1;</Code>);
    expect(wrapper.is('pre')).toBe(true);
  });

  it('uses code directly for inline', () => {
    const wrapper = shallow(
      <Code language="js" inline>
        const test = 1;
      </Code>,
    );
    expect(wrapper.is('code')).toBe(true);
  });

  it('adds extra CSS classes', () => {
    const css = 'test';
    const wrapper = shallow(
      <Code language="js" className={css}>
        const test = 1;
      </Code>,
    );
    expect(wrapper.hasClass(css)).toBe(true);
  });
});
