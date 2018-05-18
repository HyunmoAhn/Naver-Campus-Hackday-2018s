import { handleActions } from 'redux-actions';
import * as TYPES from 'store/actionTypes';

const initialState = window.localStorage.getItem('userId') || null;

const loginIdReducer = handleActions({
  [TYPES.LOGIN_AUTHORIZE_SUCCESS]: (state, action) => action.payload,
}, initialState);

export default loginIdReducer;
