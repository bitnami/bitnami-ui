import React from 'react';
import { shallow } from 'enzyme';

import Text from '../Text';

describe('Text', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Text>Test</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('apply correctly the helpers', () => {
    const wrapper = shallow(
      <Text fontSize="small" textAlign="center">
        Test
      </Text>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
