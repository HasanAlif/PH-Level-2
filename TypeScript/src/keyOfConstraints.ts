// /keyOf: type operator example

type RichPeopleVicheles = {
  car: string;
  bike: string;
  privateJet: string;
};

type MyVicheles1 = "car" | "bike" | "privateJet";

type MyVicheles2 = keyof RichPeopleVicheles;

const myVicheles1: MyVicheles1 = "car";
const myVicheles2: MyVicheles2 = "bike";
console.log(myVicheles1);
console.log(myVicheles2);

// const myVichele: MyVicheles2 = "Ship"; // Error: Type '"Ship"' is not assignable to type 'MyVicheles2'

type User = {
  id: number;
  name: string;
  address: {
    street: string;
  };
};

type UserKeys = keyof User; // "id" | "name" | "address"

const user = {
  id: 222,
  name: "Alice",
  address: {
    street: "123 Main St",
  },
};

// const myId = user["id"]; // valid
// const myName = user["name"]; // valid
// const myStreet = user["address"] // valid

// console.log(myId, myName, myStreet);

// const getPropertyFromObj = (obj: object, key: string) => {
//     return obj[key]; // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'object'.
// }

// const getPropertyFromObj = (obj: User, key: keyof User) => {
//   return obj[key];
// };

// const result = getPropertyFromObj(user, "name");
// console.log(result);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const user1 = {
  id: 222,
  name: "Alice",
  address: {
    street: "123 Main St",
  },
};

const user2 = {
  id: 333,
  title: "Developer",
  isActive: true,
};

const result1 = getPropertyFromObj(user1, "address");
console.log(result1);
const result2 = getPropertyFromObj(user2, "title");
console.log(result2);
