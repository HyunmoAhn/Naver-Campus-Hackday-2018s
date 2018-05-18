import { createSelector } from 'reselect';

export const loginSelector = state => state.get('login');

export const isFetchSelector = createSelector(
  loginSelector,
  login => login.get('isFetch'),
);

export const byIdSelector = createSelector(
  loginSelector,
  login => login.get('byId'),
);

export const getUserListSelector = createSelector(
  byIdSelector,
  (byId) => {
    const ids = byId.toJS();

    return Object.keys(ids).map(item => ids[item]);
  },
);
