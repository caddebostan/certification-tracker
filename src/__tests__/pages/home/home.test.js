import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../../../views/dashboard/dashboard';

it('renders correctly', () => {
  const wrapper = shallow(<Dashboard />);

  expect(wrapper).toMatchSnapshot();
});
