import React from 'react';
import { shallow } from 'enzyme';

import CustomButtons from '../../../components';

it('renders correctly', () => {
  const wrapper = shallow(<CustomButtons />);

  expect(wrapper).toMatchSnapshot();
});
