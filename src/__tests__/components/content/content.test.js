import React from 'react';
import { shallow } from 'enzyme';

import { Content } from '../../../components/content';

it('renders correctly', () => {
  const wrapper = shallow(<Content />);

  expect(wrapper).toMatchSnapshot();
});
