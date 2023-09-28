console.log = () => {};
const { expect } = require('chai');
const myModule = require('../index')

describe('', () => {
  it('The `mergeSort()` function should return the `inputArray` if its length is 1.', () => {
 		const inputArray = [3];
    const expectedReturn = [3];

    const actualReturn = myModule.mergeSort(inputArray);

    expect(actualReturn).to.equal(expectedReturn);
  });
  
    it('The `mergeSort()` function should return `undefined` if its length is not 1.', () => {
 		const inputArray = [];

    const actualReturn = myModule.mergeSort(inputArray);

    expect(actualReturn).to.be.undefined;
  });
  
    it('The `mergeSort()` function should return `undefined` if its length is not 1.', () => {
 		const inputArray = [3, 4];

    const actualReturn = myModule.mergeSort(inputArray);

    expect(actualReturn).to.be.undefined;
  });
});
