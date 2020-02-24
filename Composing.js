const compose = (fn1, fn2) => {
  return arg => {
    const result = fn2(arg);
    return fn1(result);
  };
};
const consider = name => {
  return `I think it could be... ${name}`;
};

const exclaim = statement => {
  return `${statement.toUpperCase()}!`;
};

const blame = compose(consider, exclaim);

console.log(blame("you"));

//   => 'I think it could be... YOU!'
