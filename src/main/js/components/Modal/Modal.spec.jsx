import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'immutable';
import * as MODAL from 'constants/MODAL_TYPE';

import Modal from './';

describe('<Modal />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match to snapshot when exist modalType', () => {
    const wrapper = shallow(
      <Modal
        modalType={MODAL.CONFIRM}
        modalProps={Immutable.Map()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
