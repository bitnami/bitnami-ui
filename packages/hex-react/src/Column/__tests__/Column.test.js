import React from 'react';
import { shallow } from 'enzyme';

import Column from '../Column';

describe('Column', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Column span={12}>Test</Column>);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows the children', () => {
    const text = 'Test';
    const wrapper = shallow(<Column span={6}>{text}</Column>);
    expect(wrapper.text()).toEqual(text);
  });

  it('sets the correct span number', () => {
    const wrapper = shallow(<Column span={6}>Test</Column>);
    expect(wrapper.hasClass('col-6')).toBe(true);
  });

  it('adds a custom CSS class', () => {
    const css = 'test';
    const wrapper = shallow(
      <Column span={12} className={css}>
        Test
      </Column>,
    );
    expect(wrapper.hasClass(css)).toBe(true);
    expect(wrapper.hasClass('col-12')).toBe(true);
  });

  it('sets CSS class for alignment', () => {
    const wrapper = shallow(
      <Column span={12} align="center">
        Test
      </Column>,
    );
    expect(wrapper.hasClass('align-center')).toBe(true);
  });
});
