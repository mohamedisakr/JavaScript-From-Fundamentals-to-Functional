// import items from "./data";
// /*
const items = [
  {
    id: "1",
    title: "queen panel bed",
    price: 10.99,
    image: "./images/product-1.jpeg"
  },
  {
    id: "2",
    title: "king panel bed",
    price: 12.99,
    image: "./images/product-2.jpeg"
  },
  {
    id: "3",
    title: "single panel bed",
    price: 12.99,
    image: "./images/product-3.jpeg"
  },
  {
    id: "4",
    title: "twin panel bed",
    price: 22.99,
    image: "./images/product-4.jpeg"
  },
  {
    id: "5",
    title: "fridge",
    price: 88.99,
    image: "./images/product-5.jpeg"
  },
  {
    id: "6",
    title: "dresser",
    price: 32.99,
    image: "./images/product-6.jpeg"
  },
  {
    id: "7",
    title: "couch",
    price: 45.99,
    image: "./images/product-7.jpeg"
  },
  {
    id: "8",
    title: "table",
    price: 33.99,
    image: "./images/product-8.jpeg"
  }
];
// */

function getById(item) {
  return Number(item.id);
}

const result = items.map(getById);
console.log(result);
