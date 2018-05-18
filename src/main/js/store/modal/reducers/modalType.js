import { handleActions } from 'redux-actions';
import * as TYPES from 'store/actionTypes';

const initialState = '';

const modalTypeReducer = handleActions({
  [TYPES.MODAL_OPEN]: (state, action) => action.payload.modalType,
  [TYPES.MODAL_CLOSE]: () => initialState,
}, initialState);

export default modalTypeReducer;
