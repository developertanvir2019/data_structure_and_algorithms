// bubble sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i - 1] = temp;
    }
  }
};
