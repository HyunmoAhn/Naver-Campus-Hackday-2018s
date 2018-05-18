import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = Immutable.List();

const byIdReducer = handleActions({
  [actions.apiCallSampleSuccess]: (state, action) => {
    const ids = {};

    action.payload.data.forEach((v) => {
      ids[v.id] = v;
    });
    return Immutable.fromJS(ids);
  },
}, initialState);

export default byIdReducer;
