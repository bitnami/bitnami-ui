import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../Grid';

describe('Grid', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Grid>Test</Grid>);
    expect(wrapper).toMatchSnapshot();
  });

  it('adds always container class', () => {
    const wrapper = shallow(<Grid>Test</Grid>);
    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('shows the children', () => {
    const text = 'Test';
    const wrapper = shallow(<Grid>{text}</Grid>);
    expect(wrapper.text()).toEqual(text);
  });

  it('adds a custom CSS class', () => {
    const css = 'test';
    const wrapper = shallow(<Grid className={css}>Test</Grid>);
    expect(wrapper.hasClass(css)).toBe(true);
    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('sets the correct size', () => {
    const wrapper = shallow(<Grid size="fluid">Test</Grid>);
    expect(wrapper.hasClass('container-fluid')).toBe(true);
  });

  it('use a different type', () => {
    const wrapper = shallow(<Grid type="main">Test</Grid>);
    expect(wrapper.is('main')).toBe(true);
  });
});
