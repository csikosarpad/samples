// Jest docs: https://jestjs.io/docs/api
import concat from '../src/concat';

describe('reproduce array concate ', () => {
  it('should add an array of numbers', () => {
    const arr1 = ['alma', 'dió', 'mogyoró'];
    const arr2 = ['tej', 'tea', 'üdítő'];
    const expectedArray = ['alma', 'dió', 'mogyoró', 'tej', 'tea', 'üdítő'];

    const result = concat(arr1, arr2);

    expect(result).toEqual(expectedArray);
  });
});
