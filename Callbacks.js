const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

const logTrue = () => {
  console.log(true);
};

const logFalse = () => {
  console.log(false);
};

const result = ifElse(true ? logTrue : logFalse);

console.log(result);

/*
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

const result = ifElse(
  true
    ? () => {
        console.log(true);
      }
    : () => {
        console.log(false);
      }
);

console.log(result);
*/

/*
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse;
};

const result = ifElse(
  //   true ? () => console.log("It is true") : () => console.log("It is false")
  //   true ? () => console.log(true) : () => console.log(false)
  true ? true : false
);

console.log(typeof result);
*/
