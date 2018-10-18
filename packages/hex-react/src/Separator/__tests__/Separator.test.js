import React from 'react';
import { shallow } from 'enzyme';

import Separator from '../Separator';

describe('Separator', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Separator />);
    expect(wrapper).toMatchSnapshot();
  });

  it('adds a custom CSS class', () => {
    const css = 'test';
    const wrapper = shallow(<Separator className={css} />);
    expect(wrapper.hasClass(css)).toBe(true);
  });

  it('sets the correct size', () => {
    const wrapper = shallow(<Separator size="small" />);
    expect(wrapper.hasClass('separator-small')).toBe(true);
  });

  it('sets the correct width', () => {
    const wrapper = shallow(<Separator width="50" />);
    expect(wrapper.hasClass('separator-50')).toBe(true);
  });

  it('sets the correct margin', () => {
    const wrapper = shallow(<Separator margin="huge" />);
    expect(wrapper.hasClass('margin-v-huge')).toBe(true);
  });
});
