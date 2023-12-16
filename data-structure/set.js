// set is a data structure that can hold a collection of values. every value must be unique

// 1. arrays can contain duplicate values whereas sets cannot contain duplicate
// Searching adn deleteing is faster in set then array
const set = new Set([1, 2, 3]);
set.add(3);
console.log(set.has(3));
set.delete(3);
for (const item of set) {
  console.log(item);
}
