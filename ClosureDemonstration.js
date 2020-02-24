function countClues() {
  var n = 0;
  return {
    count() {
      ++n;
    },
    reset() {
      n = 0;
    }
  };
}

/*
const newClue = name => {
  const length = name.length;

  return weapon => {
    let clue = length + weapon.length;
    //return !!(clue % 1);
    return Boolean(clue % 1);
  };
};

const result = newClue("Mrs. Scarlet");
console.log(result("candlestick"));
*/
