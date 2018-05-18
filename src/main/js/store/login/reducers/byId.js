import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as TYPES from 'store/actionTypes';

const initialState = Immutable.Map();

const byIdReducer = handleActions({
  [TYPES.LOGIN_USER_FETCH_SUCCESS]: (state, action) => {
    const user = action.payload;
    const byId = {};

    user.forEach((item) => {
      byId[item.id] = item;
    });

    return Immutable.fromJS(byId);
  },
}, initialState);

export default byIdReducer;
