const myAlert = () => {
  const x = "Help! I think I found a clue!";
  let count = 0;
  const alerter = () => {
    // hold the body of the function
    console.log(`${x} ${++count}`);
  };
  return alerter;
};

const func1 = myAlert();
const func2 = myAlert();

for (let i = 0; i <= 4; i++) {
  func1();
}
