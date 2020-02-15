// Q. How do you add a property whose key and value are stored in different variables?
const key = "name";
const val = "mariam";

const teacher = {};
teacher[key] = val;

console.log(teacher);

// Q. How do we loop through objects to access the values?
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
};

console.log(Object.values(user));

// console.log();
