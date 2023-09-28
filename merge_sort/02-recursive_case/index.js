const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    console.log(startArray);
    return startArray;
  }
  
  
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));

module.exports = {
  mergeSort
};