import callApi from 'api';
import { createAction, createActions } from 'redux-actions';
import * as TYPES from '../actionTypes';
import * as selectors from './selectors';

export const {
  loginUserFetchRequest,
  loginUserFetchSuccess,
  loginUserFetchFailure,
} = createActions(
  TYPES.LOGIN_USER_FETCH_REQUEST,
  TYPES.LOGIN_USER_FETCH_SUCCESS,
  TYPES.LOGIN_USER_FETCH_FAILURE,
);

export const userFetch = () => (dispatch, getState) => {
  if (selectors.isFetchSelector(getState())) {
    return Promise.reject();
  }

  dispatch(loginUserFetchRequest());

  return callApi('http://localhost:8080/users')
    .then(data => dispatch(loginUserFetchSuccess(data)))
    .catch(err => dispatch(loginUserFetchFailure(err)));
};

export const loginAuthorizeSuccess = createAction(TYPES.LOGIN_AUTHORIZE_SUCCESS);
