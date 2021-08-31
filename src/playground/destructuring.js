//OBJECT DESTRUCTURING

// const person = {
//   name: "Stuart",
//   age: 52,
//   location: {
//     city: "Falmouth",
//     temp: 28,
//   },
// };

// const { name: firstname = "anonymous", age } = person;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's currently ${temperature} degress in ${city}`);
// }

//ARRAY DESTRUCTURING

const address = ["11 Delibes Road", "Basingstoke", undefined, "UK"];

const [, city, state = "PembrokeShire"] = address;
console.log(`You are in ${city}, ${state}`);
