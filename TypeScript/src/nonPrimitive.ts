// Array, Object

let bazarList: string[] = ["eggs", "milk", "butter"];

let mixedArray: (string | number)[] = ["apple", 10, "banana", 20];

let coordinates: [number, number] = [10, 20];

let couple: [string, string] = ["John", "Jane"];

let nameRoll: [string, number][] = [
  ["Alice", 1],
  ["Bob", 2],
];

let destination: [string, string, number] = ["Paris", "France", 5];

let user: { name: string; age: number } = {
  name: "Charlie",
  age: 28,
};

let name: { firstName: string; middleName: string; lastName: string } = {
  firstName: "David",
  middleName: "Michael",
  lastName: "Smith",
};

let optionalName: { firstName: string; middleName?: string; lastName: string } =
  {
    firstName: "David",
    //   middleName: "Michael",
    lastName: "Smith",
  };

let userDetails: {
  organization: string;
  organization2: "Programming Hero";
  firstName: string;
  middleName: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Tech Corp",
  organization2: "Programming Hero",
  firstName: "David",
  middleName: "Michael",
  lastName: "Smith",
  isMarried: true,
};
