/**
 * _.map() USAGE
//_.map(list, iterator)
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item){
  return `broken ${item}`;
};  
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
  },
  map(list, callback) {
    const storage = [];
    this.each(list, doTheMapping);
    return storage;

    /*******************************************************/
    function doTheMapping(v, i, list) {
      storage.push(callback(v, i, list));
    }
  }
};

const weapons = ["candlestick", "lead pipe", "revolver"];

function makeBroken(item) {
  return `broken ${item}`;
}

const mapped = _.map(weapons, makeBroken);
console.log(mapped);
console.log(mapped.length);
