import { combineReducers } from 'redux-immutable';
import byId from './byId';
import ids from './ids';
import isListFetch from './isListFetch';
import isAddFetch from './isAddFetch';

const organogramReducer = combineReducers({
  byId,
  ids,
  isAddFetch,
  isListFetch,
});

export default organogramReducer;
