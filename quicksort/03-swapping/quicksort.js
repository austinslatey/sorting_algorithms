const swap = require('./swap');

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];

  while (leftIndex <= rightIndex) {
    // Move leftIndex until the element at leftIndex is greater than or equal to the pivot
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }

    // Move rightIndex until the element at rightIndex is less than or equal to the pivot
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }

    // Swap the elements at leftIndex and rightIndex if leftIndex is less than or equal to rightIndex
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
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
