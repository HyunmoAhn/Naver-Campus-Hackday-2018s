import { combineReducers } from 'redux-immutable';
import modalProps from './modalProps';
import modalType from './modalType';

const modalReducer = combineReducers({
  modalProps,
  modalType,
});

export default modalReducer;
