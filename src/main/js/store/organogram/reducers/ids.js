import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as STATUS from 'constants/STATUS';
import * as TYPES from 'store/actionTypes';

const initialState = Immutable.List();

const idsReducer = handleActions({
  [TYPES.ORGANOGRAM_LIST_FETCH_SUCCESS]: (state, action) => {
    const data = action.payload;
    const arr = [];

    data.forEach((item) => {
      if (item.pid === 0) {
        arr.push(item.id);
      }
    });

    return Immutable.List(arr);
  },
  [TYPES.ORGANOGRAM_STATUS_CHANGE]: (state, action) => {
    const { id, status } = action.payload;
    const arr = state.toArray();

    if (id === 0 && status === STATUS.VIEW) {
      arr.pop();
    }

    if (id === 0 && status === STATUS.EDIT) {
      arr.push(0);
    }

    return Immutable.List(arr);
  },
  [TYPES.ORGANOGRAM_ADD_SUCCESS]: (state, action) => state.push(action.payload),
}, initialState);

export default idsReducer;
