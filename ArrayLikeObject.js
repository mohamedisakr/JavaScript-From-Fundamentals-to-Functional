function constructArray() {
  //   const arr = Array.prototype.slice.call(arguments);
  const arr = [...arguments];
  arr.push("the billiards room?");
  return arr.join(" ");
}

console.log(constructArray("was", "it", "in"));
