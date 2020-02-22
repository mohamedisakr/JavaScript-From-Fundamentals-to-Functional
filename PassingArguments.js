function inc(n) {
  return n + 1;
}

function square(n) {
  return n * n;
}

function doMathSoIDontHaveTo(n, func) {
  return func(n);
}

console.log(doMathSoIDontHaveTo(7, square));

console.log(doMathSoIDontHaveTo(2, inc));
