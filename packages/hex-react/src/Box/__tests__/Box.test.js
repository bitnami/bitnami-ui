import React from 'react';
import { shallow } from 'enzyme';

import Box from '../Box';

describe('Box', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Box>Test</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with Helpers', () => {
    const wrapper = shallow(
      <Box marginTop="small" background="brand" fontSize="big">
        Test
      </Box>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
