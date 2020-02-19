function createTuple(a, b, c, d) {
  const args = [...arguments];
  console.log(args);
  return [
    [a, c],
    [b, d]
  ];
}

createTupleAnonymous = (a, b, c, d) => {
  const args = [...arguments];
  console.log(args);
  return [
    [a, c],
    [b, d]
  ];
};

const result = createTuple("It", "be", "could", "anyone", "no one");
console.log(result);

const anonymous = createTupleAnonymous("It", "be", "could", "anyone", "no one");
console.log(anonymous);
