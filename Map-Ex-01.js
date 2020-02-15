// this exercise 1 in JavaScript: From Fundamentals to Functional JS, v2
export function map(array, callback) {
  const result = [];
  array.forEach((v, i, list) => {
    result.push(callback(v));
  });
  return result;
}

export function makeBroken(item) {
  return `broken ${item}`;
}

const weapons = ["candlestick", "lead pipe", "revolver"];

const list = [1, 2, 3];

export function mutateArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[0] = array[0] * array[0];
  }
  return array;
}

var person = [];
person.name = "Mrs. White";
var who = person.name;
console.log(who); // ??

/*
const list = [1, 2, 3];
function mutateArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[0] = array[0] * array[0];
  }
  return array;
}
const result = mutateArray(list);
console.log(result);
// */
