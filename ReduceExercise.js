// _.reduce(collection, [iteratee=_.identity], [accumulator])
const _ = {
  /**
   *
   * @param {*} collection The collection to iterate over.
   * @param {*} iteratee The function invoked per iteration
   * @param {*} accumulator The initial value
   */
  reduce(collection, iteratee, accumulator) {
    var result = accumulator;
    if (Array.isArray(collection)) {
      collection.forEach((v, i, list) => {
        result = iteratee(result, v);
      });
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          result = iteratee(result, collection[key], key);
          console.log(`iteration ${key} result = ${result}`);
        }
      }
    }

    return result;
  }
};

function reduce(list, callback, initial) {
  var memo = initial;
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
    } else {
      memo = callback(list[i], memo);
    }
  }
  return memo;
}

const result = reduce([1, 2, 3], (v, sum) => v + sum);
console.log(result);

//#region Test addition callback function
/*
function sumValues(accumulator, currentValue) {
  return accumulator + currentValue;
}
const result = _.reduce([0, 1, 2, 3, 4], sumValues, 0);
console.log(result);
console.log(result === 10);

const result2 = _.reduce([0, 1, 2, 3, 4], sumValues, 10);
console.log(result2);
console.log(result2 === 20);

const result = _.reduce(
  [1, 2],
  function(sum, n) {
    return sum + n;
  },
  0
);

console.log(result === 3);

const result2 = _.reduce(
  [1, 2, 3, 4],
  function(sum, n) {
    return sum + n;
  },
  0
);

console.log(result2 === 10);
*/

//#endregion

//#region Test grouping callback function for object
/*
let people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 }
];

function groupBy(objectArray, property) {
  function getObject(acc, obj) {
    let key = obj[property];
    console.log(`acc => ${acc}`);
    console.log(`!acc[key] => ${!acc[key]}`);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }

  return _.reduce(objectArray, getObject, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }




let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
function countNames(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}

let countedNames = _.reduce(names, countNames, {});
console.log(countedNames);

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


function flat(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}
let flattened = _.reduce(
  [
    [0, 1],
    [2, 3],
    [4, 5]
  ],
  flat,
  []
);
console.log(flattened);

// flattened is [0, 1, 2, 3, 4, 5]

function add(accumulator, currentValue) {
  return accumulator + currentValue.x;
}

let initialValue = 0;
let sum = _.reduce([{ x: 1 }, { x: 2 }, { x: 3 }], add, initialValue);
console.log(sum); // logs 6

const result = _.reduce(
  { a: 1, b: 2, c: 1 },
  function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);
console.log(result);
*/
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
//#endregion
