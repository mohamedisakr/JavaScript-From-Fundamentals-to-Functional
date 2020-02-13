// this exercise 1 in JavaScript: From Fundamentals to Functional JS, v2
export function map(array, callback) {
  const result = [];
  array.forEach((v, i, list) => {
    result.push(callback(v));
  });
  //   for (let i = 0; i < array.length; i++) {
  //     result.push(callback(array[i]));
  //   }
  return result;
}

const weapons = ["candlestick", "lead pipe", "revolver"];

export function makeBroken(item) {
  return `broken ${item}`;
}
