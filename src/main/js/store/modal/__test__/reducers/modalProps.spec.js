import Immutable from 'immutable';
import * as actions from 'store/modal/actions';
import * as MODAL from 'constants/MODAL_TYPE';
import modalProps from 'store/modal/reducers/modalProps';

describe('modalProps reducer', () => {
  const initialState = Immutable.Map();
  it('should return initialState', () => {
    expect(modalProps(undefined, {})).toBe(Immutable.Map());
  });

  it('should handle TYPES.MODAL_OPEN', () => {
    const nextState = Immutable.Map({
      title: 'mock-title',
      content: 'mock-content',
    });

    expect(modalProps(initialState, actions.modalOpen(MODAL.CONFIRM, nextState)))
      .toEqual(Immutable.Map({
        title: 'mock-title',
        content: 'mock-content',
      }));
  });

  it('should handle TYPES.MODAL_CLOSE', () => {
    expect(modalProps(initialState, actions.modalClose())).toEqual(Immutable.Map());
  });
});
