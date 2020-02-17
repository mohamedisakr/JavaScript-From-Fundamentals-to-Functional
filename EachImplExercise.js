/**
 * Exercise:
 * 1. Complete the rest of this function so that it works as described
 * in the previous exercise:
 * _.each = function(list, callback) {
 *      //... TODO
 * }
 *
 * 2. Test _.each function
 */

const _ = {
  each(list, callback) {
    if (Array.isArray(list)) {
      for (let index = 0; index < list.length; index++) {
        callback(list[index], index, list);
      }
    } else {
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          callback(list[key], key, list);
        }
      }
    }
  }
};

var rooms = ["observatory", "ballroom", "library"];
var logger = function(val) {
  console.log(val);
};

_.each(rooms, logger);
