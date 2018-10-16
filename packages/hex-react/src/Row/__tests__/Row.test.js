import React from 'react';
import { shallow } from 'enzyme';

import Row from '../Row';

describe('Row', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Row>Test</Row>);
    expect(wrapper).toMatchSnapshot();
  });

  it('adds row reverse class', () => {
    const wrapper = shallow(<Row reverse>Test</Row>);
    expect(wrapper.hasClass('row-reverse')).toBe(true);
  });

  it('adds alignment classes', () => {
    const wrapper = shallow(<Row align="center">Test</Row>);
    expect(wrapper.hasClass('align-center')).toBe(true);
  });

  describe('setting collapse CSS classes', () => {
    it('single value', () => {
      const wrapper = shallow(<Row collapse={[1]}>Test</Row>);
      expect(wrapper.hasClass('collapse-on-phone')).toBe(true);
    });

    it('two different values', () => {
      const wrapper = shallow(<Row collapse={[1, 2]}>Test</Row>);
      expect(wrapper.hasClass('collapse-on-phone collapse-2-b-phone-land')).toBe(true);
    });

    it('two equal values', () => {
      const wrapper = shallow(<Row collapse={[2, 2]}>Test</Row>);
      expect(wrapper.hasClass('collapse-2-b-phone-land')).toBe(true);
    });

    it('three different values', () => {
      const wrapper = shallow(<Row collapse={[1, 2, 3]}>Test</Row>);
      expect(
        wrapper.hasClass('collapse-on-phone collapse-2-b-phone-land collapse-3-b-tablet'),
      ).toBe(true);
    });

    it('three equal values', () => {
      const wrapper = shallow(<Row collapse={[1, 2, 2]}>Test</Row>);
      expect(wrapper.hasClass('collapse-on-phone collapse-2-b-tablet')).toBe(true);
    });

    it('more than 3 different values', () => {
      const wrapper = shallow(<Row collapse={[1, 2, 2, 3, 4]}>Test</Row>);
      expect(
        wrapper.hasClass(
          'collapse-on-phone collapse-2-b-tablet collapse-3-b-desktop collapse-4-b-wide',
        ),
      ).toBe(true);
    });
  });
});
