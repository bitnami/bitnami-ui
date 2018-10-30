import React from 'react';
import { shallow } from 'enzyme';

import Anchor from '../Anchor';

describe('Anchor', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Anchor href="https://design.bitnami.com">Test</Anchor>);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows the children', () => {
    const text = 'Design';
    const wrapper = shallow(<Anchor href="https://design.bitnami.com">{text}</Anchor>);
    expect(wrapper.text()).toEqual(text);
  });

  it('adds no-decoration CSS class', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" noUnderline>
        Test
      </Anchor>,
    );
    expect(wrapper.hasClass('no-decoration')).toBe(true);
  });

  it('adds secondary CSS class', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" secondary>
        Test
      </Anchor>,
    );
    expect(wrapper.hasClass('secondary')).toBe(true);
  });

  it('adds inverse CSS class', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" inverse>
        Test
      </Anchor>,
    );
    expect(wrapper.hasClass('inverse')).toBe(true);
  });

  it('sets the proper rel attribute for external Anchors', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" external>
        Test
      </Anchor>,
    );
    expect(wrapper.prop('rel')).toEqual('noopener');
  });

  it('sets the proper target attribute for external Anchors', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" external>
        Test
      </Anchor>,
    );
    expect(wrapper.prop('target')).toEqual('_blank');
  });

  it('sets the proper rel attribute for noreferrer', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" noReferrer>
        Test
      </Anchor>,
    );
    expect(wrapper.prop('rel')).toEqual('noreferrer');
  });

  it('sets the proper rel attribute for external and noreferrer Anchors', () => {
    const wrapper = shallow(
      <Anchor href="https://design.bitnami.com" external noReferrer>
        Test
      </Anchor>,
    );
    expect(wrapper.prop('rel')).toEqual('noopener noreferrer');
  });
});
