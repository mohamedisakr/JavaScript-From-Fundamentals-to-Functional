function constructArray() {
  const arr = Array.from(arguments);
  arr.push("the billiards room?");
  return arr.join(" ");
}

console.log(constructArray("was", "it", "in"));
