const makeTimer = () => {
  let elapsed = 0;
  const stopwatch = () => {
    return elapsed;
  };
  const inc = () => {
    elapsed++;
  };
  setInterval(inc, 1000);
  return stopwatch;
};
let timer = makeTimer();
console.log(timer);
// let result = timer();
console.log(timer());
