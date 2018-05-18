import Immutable from 'immutable';
import * as selectors from 'store/modal/selectors';

describe('test modal selectors', () => {
  const mockState = Immutable.Map({
    modal: Immutable.Map({
      modalProps: Immutable.Map({
        title: 'mock-title',
        content: 'mock-content',
      }),
      modalType: 'mock-type',
    }),
  });

  it('should select modalProps', () => {
    expect(selectors.modalPropsSelector(mockState))
      .toEqual(Immutable.Map({
        title: 'mock-title',
        content: 'mock-content',
      }));
  });

  it('should select modalTypes', () => {
    expect(selectors.modalTypeSelector(mockState))
      .toBe('mock-type');
  });
});
