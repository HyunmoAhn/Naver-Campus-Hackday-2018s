import React from 'react';
import { shallow } from 'enzyme';

import Alert from './';

describe('<Alert />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<Alert onModalClose={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
