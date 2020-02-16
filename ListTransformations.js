const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

game.suspects.forEach(suspect => console.log(suspect.name, suspect.color));

// for (let i = 0; i < game.suspects.length; i++) {
//   let item = game.suspects[i];
//   console.log(item.name, item.color);
// }
