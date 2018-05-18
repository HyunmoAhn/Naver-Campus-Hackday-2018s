import * as actions from 'store/counter/actions';
import value from 'store/counter/reducers/value';

describe('value reducer', () => {
  it('should return initialState', () => {
    expect(value(undefined, {})).toBe(0);
  });

  it('should handle counterIncrement', () => {
    expect(value(5, actions.counterIncrement())).toEqual(6);
    expect(value(6, actions.counterIncrement())).toEqual(7);
  });

  it('should handle counterIncrement', () => {
    expect(value(5, actions.counterDecrement())).toEqual(4);
    expect(value(4, actions.counterDecrement())).toEqual(3);
  });
});
