// linear search
const findIndex = (n, t) => {
  for (i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex([-5, 2, 10, 4, 6], 10));

// Binary search
// the main
