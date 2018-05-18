import * as actions from 'store/modal/actions';
import * as MODAL from 'constants/MODAL_TYPE';
import modalType from 'store/modal/reducers/modalType';

describe('modalTypes Reducer', () => {
  const initialState = '';

  it('should return initialState', () => {
    expect(modalType(undefined, {})).toBe(initialState);
  });

  it('should handle TYPES.MODAL_OPEN', () => {
    expect(modalType(initialState, actions.modalOpen(MODAL.CONFIRM)))
      .toBe(MODAL.CONFIRM);
  });

  it('should handle TYPES.MODAL_CLOSE', () => {
    expect(modalType(initialState, actions.modalClose()))
      .toBe(initialState);
  });
});
