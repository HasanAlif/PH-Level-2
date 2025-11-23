// dynamically generalize

// type GenericArray = Array<string>;
type GenericArray<T> = Array<T>;

// const friends : string[] = ['Alice', 'Bob', 'Charlie'];
// const friends: Array<string> = ["Alice", "Bob", "Charlie"];
const friends: GenericArray<string> = ["Alice", "Bob", "Charlie"];

// const rollNumbers: number[] = [101, 102, 103];
// const rollNumbers: Array<number> = [101, 102, 103];
const rollNumbers: GenericArray<number> = [101, 102, 103];

// const isEligible: boolean[] = [true, false, true];
// const isEligible: Array<boolean> = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];

// type Coordinates = [number, number];
type Coordinates<x, y> = [x, y];

const coordinates1: Coordinates<number, number> = [10, 20];
const coordinates2: Coordinates<string, string> = ["10", "20"];

// const userList = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

const userList: GenericArray<{ name: string; age: number }> = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
