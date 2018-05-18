import React from 'react';
import { shallow } from 'enzyme';

import App from '../pages/application/applicationView';

it('renders correctly', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
