const _ = {
  from(list) {
    console.log(Array.isArray(arguments));
    if (Array.isArray(list)) {
      //   return Array.prototype.slice.call(list);
      return [...list];
    }
  }
};

const arr = ["was", "it", "in"];
const result = _.from(arr);
console.log(result);
