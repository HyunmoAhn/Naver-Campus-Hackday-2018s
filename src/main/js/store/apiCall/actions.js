import axios from 'axios';
import { createActions } from 'redux-actions';
import * as TYPES from '../actionTypes';
import * as selectors from './selectors';

export const {
  apiCallSampleRequest,
  apiCallSampleSuccess,
  apiCallSampleFailure,
} = createActions(
  TYPES.API_CALL_SAMPLE_REQUEST,
  TYPES.API_CALL_SAMPLE_SUCCESS,
  TYPES.API_CALL_SAMPLE_FAILURE,
);

export const apiCallSample = () => (dispatch, getState) => {
  if (selectors.isFetchSelector(getState())) {
    return Promise.reject();
  }

  dispatch(apiCallSampleRequest());

  return axios('/examples', {
    baseURL: 'http://127.0.0.1:4002',
  })
    .then(data => dispatch(apiCallSampleSuccess(data)))
    .catch(err => dispatch(apiCallSampleFailure(err)));
};
