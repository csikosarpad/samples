// Jest docs: https://jestjs.io/docs/api

function reduce(arr, callbackFv, initvalue) {
  let state = initvalue;
  arr.forEach((item) => (state = callbackFv(state, item)));
  return state;
}

describe('reproduce array reduce ', () => {
  it('should add an array of numbers', () => {
    const array1 = [1, 2, 3, 4];
    const initialValue = 0;
    const sumWithInitial = reduce(
      array1,
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    expect(sumWithInitial).toEqual(10);
  });
});
