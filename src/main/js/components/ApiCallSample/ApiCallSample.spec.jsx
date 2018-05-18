import React from 'react';
import { shallow } from 'enzyme';

import ApiCallSample from './';

describe('<ApiCallSample />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<ApiCallSample />);

    expect(wrapper).toMatchSnapshot();
  });
});
