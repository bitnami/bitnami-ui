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
      <Box marginT="small" background="brand">
        Test
      </Box>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
