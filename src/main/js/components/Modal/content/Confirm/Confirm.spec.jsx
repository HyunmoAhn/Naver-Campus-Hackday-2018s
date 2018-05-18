import React from 'react';
import { shallow } from 'enzyme';

import Confirm from './';

describe('<Confirm />', () => {
  it('should match to snapshot when render default', () => {
    const wrapper = shallow(<Confirm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call props functions exactly when call handleConfirm', () => {
    const onConfirm = jest.fn();
    const onModalClose = jest.fn();
    const wrapper = shallow(
      <Confirm
        onConfirm={onConfirm}
        onModalClose={onModalClose}
      />,
    );

    wrapper.instance().handleConfirm();

    expect(onConfirm).toHaveBeenCalledTimes(1);
    expect(onConfirm).toHaveBeenCalledWith();
    expect(onModalClose).toHaveBeenCalledTimes(1);
    expect(onModalClose).toHaveBeenCalledWith();
  });
});
