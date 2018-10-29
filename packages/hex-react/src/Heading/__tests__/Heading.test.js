import React from 'react';
import { shallow } from 'enzyme';

import Heading from '../Heading';

describe('Heading', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Heading>Test</Heading>);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets the heading level to 1 by default', () => {
    const wrapper = shallow(<Heading>Test</Heading>);
    expect(wrapper.is('h1')).toBe(true);
  });

  it('sets the proper heading level', () => {
    const wrapper = shallow(<Heading level={2}>Test</Heading>);
    expect(wrapper.is('h2')).toBe(true);
  });

  it('adds a custom CSS class', () => {
    const css = 'test';
    const wrapper = shallow(<Heading className={css}>Test</Heading>);
    expect(wrapper.hasClass(css)).toBe(true);
  });

  it('shows the children', () => {
    const text = 'Test';
    const wrapper = shallow(<Heading>{text}</Heading>);
    expect(wrapper.text()).toEqual(text);
  });

  it('adds inverse CSS class', () => {
    const wrapper = shallow(<Heading inverse>Test</Heading>);
    expect(wrapper.hasClass('inverse')).toBe(true);
  });

  it('adds subtitle CSS class', () => {
    const wrapper = shallow(<Heading subtitle>Test</Heading>);
    expect(wrapper.hasClass('subtitle')).toBe(true);
  });
});
