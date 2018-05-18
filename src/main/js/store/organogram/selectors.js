import { createSelector } from 'reselect';

export const organogramSelector = state => state.get('organogram');

export const byIdSelector = createSelector(
  organogramSelector,
  organogram => organogram.get('byId'),
);

export const idsSelector = createSelector(
  organogramSelector,
  organogram => organogram.get('ids'),
);

export const isListFecthSelector = createSelector(
  organogramSelector,
  organogram => organogram.get('isListFetch'),
);

export const isAddFetchSelector = createSelector(
  organogramSelector,
  organogram => organogram.get('isAddFetch'),
);


export const getOrganogramListRecur = createSelector(
  [byIdSelector, idsSelector],
  (byId, ids) => {
    const obj = byId.toJS();

    Object.keys(obj).forEach((item) => {
      obj[item].children = obj[item].children.map(child => obj[child]);
    });

    return ids.map(id => obj[id]).toArray();
  },
);
