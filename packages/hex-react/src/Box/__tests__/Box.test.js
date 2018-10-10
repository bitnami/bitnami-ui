import React from 'react';
import { shallow } from 'enzyme';

import Box from '../Box';

describe('Box', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Box>Test</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it('apply correctly the helpers', () => {
    const wrapper = shallow(
      <Box background="brand" shadow={1}>
        Test
      </Box>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
