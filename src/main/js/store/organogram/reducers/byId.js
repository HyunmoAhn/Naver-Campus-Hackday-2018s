import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import * as TYPES from 'store/actionTypes';
import * as STATUS from 'constants/STATUS';

const initialState = Immutable.Map();

const byIdReducer = handleActions({
  [TYPES.ORGANOGRAM_LIST_FETCH_SUCCESS]: (state, action) => {
    const data = action.payload;
    const nextState = {};

    data.forEach((item) => {
      nextState[item.id] = {
        id: item.id,
        name: item.name,
        spread: item.spread,
        status: STATUS.VIEW,
        order: item.order,
        depth: item.depth,
        children: [],
        pid: item.pid,
      };

      if (item.pid !== 0) {
        nextState[item.pid].children.push(item.id);
      }
    });

    return Immutable.fromJS(nextState);
  },
  [TYPES.ORGANOGRAM_STATUS_CHANGE]: (state, action) => {
    const { id, status } = action.payload;

    if (!state.has(id)) {
      return state.set(id, Immutable.Map({
        id: 0,
        name: '',
        status,
        depth: 1,
        children: [],
        parent: 0,
      }));
    }

    return state.setIn([id, 'status'], status);
  },
  [TYPES.ORGANOGRAM_ADD_REQUEST]: (state, action) => {
    const name = action.payload;

    return state.setIn([0, 'name'], name);
  },
  [TYPES.ORGANOGRAM_ADD_SUCCESS]: (state, action) => {
    const id = action.payload;

    return state.set(id, state.get(0)).delete(0);
  },
}, initialState);

export default byIdReducer;
