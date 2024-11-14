const users = [
  { firstName: "a", lastName: "b", age: 28 },
  { firstName: "c", lastName: "d", age: 38 },
];

// get list of full name
const output = users.map((x) => x.firstName + x.lastName);
console.log(output);

//count  age
const output2 = users.reduce(function (acc, curr) {
  // Check if the age property exists in the accumulator
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc; // Return the updated accumulator
}, {});

console.log(output2);

//firstn name of age <30

const output3 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output3);
