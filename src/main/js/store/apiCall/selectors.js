import { createSelector } from 'reselect';

export const apiCallSelector = state => state.get('apiCall');

export const byIdSelector = createSelector(
  apiCallSelector,
  apiCall => apiCall.get('byId'),
);

export const idsSelector = createSelector(
  apiCallSelector,
  apiCall => apiCall.get('ids'),
);

export const isFetchSelector = createSelector(
  apiCallSelector,
  apiCall => apiCall.get('isFetch'),
);

export const getDataSelector = createSelector(
  [byIdSelector, idsSelector],
  (byId, ids) => {
    const data = [];

    ids.forEach((id) => {
      data.push(byId.get(id.toString()));
    });

    return data;
  },
);
