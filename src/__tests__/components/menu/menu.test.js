import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from '../../../components/menu';

it('renders correctly', () => {
  const wrapper = shallow(<Menu />);

  expect(wrapper).toMatchSnapshot();
});
