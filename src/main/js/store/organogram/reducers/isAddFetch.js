import { combineActions, handleActions } from 'redux-actions';
import * as TYPES from 'store/actionTypes';

const initialState = false;

const isAddFetchReducer = handleActions({
  [TYPES.ORGANOGRAM_ADD_REQUEST]: () => true,
  [combineActions(
    TYPES.ORGANOGRAM_ADD_SUCCESS,
    TYPES.ORGANOGRAM_ADD_FAILURE,
  )]: () => false,
}, initialState);

export default isAddFetchReducer;
