import { combineReducers } from 'redux-immutable';
import byId from './byId';
import ids from './ids';
import isFetch from './isFetch';

export default combineReducers({
  byId,
  ids,
  isFetch,
});
