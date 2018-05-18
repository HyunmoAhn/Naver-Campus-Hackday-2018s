import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = Immutable.List();

const idsReducer = handleActions({
  [actions.apiCallSampleSuccess]: (state, action) => action.payload.data.map(v => v.id),
}, initialState);

export default idsReducer;
