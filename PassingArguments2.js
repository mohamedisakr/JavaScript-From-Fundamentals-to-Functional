// passing a function to a function and calling it with arguments

// How was this done pr-ES6??
function ifElse(condition, isTrue, isFalse) {
  // console.log(args);
  const args = [].slice.call(arguments, 3);
  console.log(args.length);
  return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
}

const logTrue = messages => {
  console.log(messages);
};

const logFalse = messages => {
  console.log(messages);
};

ifElse(true, logTrue, logFalse);
ifElse(true, logTrue, logFalse, "salam ", "alicom");

/*
// many arguments use spread operator
const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args);
  return condition ? isTrue(...args) : isFalse(...args);
};

ifElse(true, fn1, fn2, "salam ", "alicom");
*/

/*
// 1 argument to be passed
const ifElse = (condition, isTrue, isFalse, p) => {
  return condition ? isTrue(p) : isFalse(p);
};

ifElse(true, fn1, fn2, "salam alicom");
*/
