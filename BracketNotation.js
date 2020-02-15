var person = [];
// var plea = "wouldShe";
person.name = "Mrs. White";
person["plea"] = "I would never!";
person["000"] = "use number coerced to string as key/index";
person["&*"] = "using weired characters as key/index";
person.pop();

console.log(person);
console.log(Array.isArray(person) ? "person is array" : "person is NOT array");
console.log(person.plea);
// console.log(person.wouldShe); // undefined
console.log(`array length is ${person.length}`);
