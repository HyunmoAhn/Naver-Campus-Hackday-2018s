import { combineReducers } from 'redux-immutable';
import byId from './byId';
import isFetch from './isFetch';
import loginId from './loginId';

export default combineReducers({
  byId,
  isFetch,
  loginId,
});
