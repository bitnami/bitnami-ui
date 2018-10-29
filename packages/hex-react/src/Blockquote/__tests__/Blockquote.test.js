import React from 'react';
import { shallow } from 'enzyme';

import Blockquote from '../Blockquote';

describe('Blockquote', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Blockquote>Test</Blockquote>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the text', () => {
    const text = 'this is a blockquote';
    const wrapper = shallow(<Blockquote>{text}</Blockquote>);
    expect(wrapper.text()).toEqual(text);
  });

  it('adds outstanding class', () => {
    const wrapper = shallow(<Blockquote outstanding />);
    expect(wrapper.hasClass('outstanding')).toBe(true);
  });

  it('adds color class', () => {
    const wrapper = shallow(<Blockquote color="brand" />);
    expect(wrapper.hasClass('brand')).toBe(true);
  });

  it('accept external classNames', () => {
    const wrapper = shallow(<Blockquote className="test" />);
    expect(wrapper.hasClass('test')).toBe(true);
  });

  it('accept any other HTML attribute', () => {
    const cite = 'https://bitnami.com/';
    const wrapper = shallow(<Blockquote cite={cite} />);
    expect(wrapper.prop('cite')).toEqual(cite);
  });
});
