import { createAction, createActions } from 'redux-actions';
import callApi from 'api';
import * as TYPES from '../actionTypes';
import * as selectors from './selectors';

export const {
  organogramListFetchRequest,
  organogramListFetchSuccess,
  organogramListFetchFailure,
} = createActions(
  TYPES.ORGANOGRAM_LIST_FETCH_REQUEST,
  TYPES.ORGANOGRAM_LIST_FETCH_SUCCESS,
  TYPES.ORGANOGRAM_LIST_FETCH_FAILURE,
);

export const organogramFetch = () => (dispatch, getState) => {
  if (selectors.isListFecthSelector(getState())) {
    return Promise.reject();
  }

  dispatch(organogramListFetchRequest());

  return callApi('http://localhost:8080/orgunits', {
    userId: true,
  })
    .then(data => dispatch(organogramListFetchSuccess(data)))
    .catch(err => dispatch(organogramListFetchFailure(err)));
};

export const organogramStatusChange = createAction(TYPES.ORGANOGRAM_STATUS_CHANGE);

export const {
  organogramAddRequest,
  organogramAddSuccess,
  organogramAddFailure,
} = createActions(
  TYPES.ORGANOGRAM_ADD_REQUEST,
  TYPES.ORGANOGRAM_ADD_SUCCESS,
  TYPES.ORGANOGRAM_ADD_FAILURE,
);

export const organogramAdd = name => (dispatch, getState) => {
  if (selectors.isAddFetchSelector(getState())) {
    return Promise.reject();
  }

  dispatch(organogramAddRequest(name));

  return callApi('http://localhost:8080/orgunits', {
    method: 'POST',
    data: {
      name,
    },
  })
    .then(data => dispatch(organogramAddSuccess(data)))
    .catch(err => dispatch(organogramAddFailure(err)));
};
