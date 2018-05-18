import { combineReducers } from 'redux-immutable';
import login from './login/reducers';
import modal from './modal/reducers';
import organogram from './organogram/reducers';

const rootReducer = combineReducers({
  login,
  modal,
  organogram,
});

export default rootReducer;
