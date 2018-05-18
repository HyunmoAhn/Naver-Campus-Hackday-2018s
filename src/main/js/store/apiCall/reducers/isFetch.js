import { combineActions, handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = false;

const isFetchReducer = handleActions({
  [actions.apiCallSampleRequest]: () => true,
  [combineActions(
    actions.apiCallSampleSuccess,
    actions.apiCallSampleFailure,
  )]: () => false,
}, initialState);

export default isFetchReducer;
