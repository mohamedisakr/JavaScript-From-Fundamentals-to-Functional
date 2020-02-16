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

// const colors = suspects.map(suspect => suspect.color);
// console.log(colors);
console.log(suspects.length);
const [{ color: firstColor }, { color: secondColor }] = suspects;
console.log(firstColor, secondColor);

//   {
//   const [orange, red] = suspect.color;
//   console.log(orange, red);
// });

// const item = {
//   name: "Miss Scarlet",
//   color: "red"
// };
// const { color } = item;
// console.log(color);
