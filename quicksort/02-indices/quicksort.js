const swap = require('./swap');

const partition = (array, leftIndex, rightIndex) => {
  const pivot = Math.floor((leftIndex + rightIndex) / 2);

  while (leftIndex <= rightIndex) {
    // Move leftIndex until the element at leftIndex is greater than or equal to the pivot
    while (array[leftIndex] < array[pivot]) {
      leftIndex++;
    }

    // Move rightIndex until the element at rightIndex is less than or equal to the pivot
    while (array[rightIndex] > array[pivot]) {
      rightIndex--;
    }

    // Swap the elements at leftIndex and rightIndex
    if (leftIndex <= rightIndex) {
      [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
      leftIndex++;
      rightIndex--;
    }
  }

  // Return the last leftIndex (pivot index)
  return leftIndex;
};
module.exports = {
  partition
};