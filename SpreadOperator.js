function createTuple(a, b, c, ...d) {
  return [
    [a, c],
    [b, d]
  ];
}

function flat(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (Array.isArray(element)) {
      result = [...result, ...element];
    } else {
      result.push(element);
    }
  }
  return result;
}

const result = createTuple("It", "be", "could", "anyone", "no one");
console.log(result);

// result.map(item => console.log(item));

const flated = flat(result);
console.log(flated);

const mixed = flat([1, [2, 3], [4, 5, 6, 7], [8, 9, 10], 11]);
console.log(mixed);
