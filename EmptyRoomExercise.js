const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false }
    ]
  }
];

function getRooms(accumulator, currentValue) {
  return [...currentValue.rooms];
}

let allRooms = newDevelopment.reduce(getRooms, []);
console.log(allRooms);

/*
const rooms = [
  { kitchen: false },
  { ballroom: false },
  { conservatory: true },
  { "dining room": true },
  { "billiard room": false },
  { library: true }
];

const one = rooms.map((v, i, list) => {
  Object.entries(v).filter(([key, value]) => {
    console.log(`${key} ${value}`);
    // console.log(v[key] === true);
    // return key; //v[key] === true; //? key : null;
  });
});

console.log(one);
*/
// const one = rooms.forEach((v, i, list) => {
//   Object.entries(v).forEach(([key, value]) => {
//     // console.log(`${key} ${value}`);
//     console.log(v[key] === true);
//   });

// for (let [key, value] of Object.entries(v)) {
//   // console.log(`${key}: ${value}`);
//   key === true;
// }

// console.log("===========================");

// const two = rooms.filter((v, i, list) => i); //v[i] === true
// console.log(two);

// rooms.forEach((v,i,list)=>{

// })
