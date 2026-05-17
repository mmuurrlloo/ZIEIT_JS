function countOccurrences(arr) {
  let map = new Map();
  for (let item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);
console.log(result);