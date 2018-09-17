import React from 'react';
import { shallow } from 'enzyme';

import Blockquote from '../Blockquote';

describe('Blockquote', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Blockquote>Test</Blockquote>).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the text', () => {
    const text = 'this is a blockquote';
    const wrapper = shallow(<Blockquote>{text}</Blockquote>).dive();
    expect(wrapper.text()).toEqual(text);
  });

  it('adds outstanding class', () => {
    const wrapper = shallow(<Blockquote outstanding />).dive();
    expect(wrapper.hasClass('outstanding')).toBe(true);
  });

  it('accept external classNames', () => {
    const wrapper = shallow(<Blockquote className="test" />).dive();
    expect(wrapper.hasClass('test')).toBe(true);
  });

  it('accept any other HTML attribute', () => {
    const cite = 'https://bitnami.com/';
    const wrapper = shallow(<Blockquote cite={cite} />).dive();
    expect(wrapper.prop('cite')).toEqual(cite);
  });
});
