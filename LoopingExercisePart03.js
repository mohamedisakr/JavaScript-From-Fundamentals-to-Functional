suspects = [
  {
    name: "Rusty",
    color: "orange"
  },
  {
    name: "Miss Scarlet",
    color: "red"
  }
];

// if there are just 2 elements in the array
console.log(suspects.length);
const [{ color: firstColor }, { color: secondColor }] = suspects;
console.log(firstColor, secondColor);

// if there are more than 2 elements in the array
// const colors = suspects.map(suspect => suspect.color);
// console.log(colors);
