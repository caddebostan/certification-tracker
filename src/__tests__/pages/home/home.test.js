import React from 'react';
import { shallow } from 'enzyme';

import { HomeView } from '../../../pages/home';

it('renders correctly', () => {
  const wrapper = shallow(<HomeView />);

  expect(wrapper).toMatchSnapshot();
});
