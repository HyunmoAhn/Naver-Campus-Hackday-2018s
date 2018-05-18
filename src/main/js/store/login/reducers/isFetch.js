import { combineActions, handleActions } from 'redux-actions';
import * as TYPES from 'store/actionTypes';

const initialState = false;

const isFetchReducer = handleActions({
  [TYPES.LOGIN_USER_FETCH_REQUEST]: () => true,
  [combineActions(
    TYPES.LOGIN_USER_FETCH_SUCCESS,
    TYPES.LOGIN_USER_FETCH_FAILURE,
  )]: () => false,
}, initialState);

export default isFetchReducer;
