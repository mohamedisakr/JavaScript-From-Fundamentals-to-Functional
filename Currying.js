const curry = fn => {
  return arg1 => {
    return arg2 => {
      fn(arg1, arg2);
    };
  };
};

var abc = function(a, b) {
  return [a, b];
};

var currried = curry(abc);
const result = currried(1)(2);
console.log(result);

/*
_.curry(func, [(arity = func.length)]);

var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2);
// => [1, 2]

*/
