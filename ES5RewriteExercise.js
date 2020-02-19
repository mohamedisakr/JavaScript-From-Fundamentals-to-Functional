function add(a, b) {
  console.log(arguments);
  b = b || 2;
  return a + b;
}

console.log(add(3));
