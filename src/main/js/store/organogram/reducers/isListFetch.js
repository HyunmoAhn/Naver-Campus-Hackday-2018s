import { combineActions, handleActions } from 'redux-actions';
import * as TYPES from 'store/actionTypes';

const initialState = false;

const isListFetchReducer = handleActions({
  [TYPES.ORGANOGRAM_LIST_FETCH_REQUEST]: () => true,
  [combineActions(
    TYPES.ORGANOGRAM_LIST_FETCH_SUCCESS,
    TYPES.ORGANOGRAM_LIST_FETCH_FAILURE,
  )]: () => false,
}, initialState);

export default isListFetchReducer;
