import React from 'react';
import { shallow } from 'enzyme';

import { CustomInput } from '../../../components';

it('renders correctly', () => {
  const wrapper = shallow(<CustomInput />);

  expect(wrapper).toMatchSnapshot();
});
