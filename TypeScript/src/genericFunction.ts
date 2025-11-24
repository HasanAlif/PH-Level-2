//Generic Function Example

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithObject = (value: { id: number; name: string }) => {
  [value];
};

// const arrString = createArrayWithString("Hello TypeScript");
// const arrNumber = createArrayWithNumber(42);
// const arrObject = createArrayWithObject({ id: 1, name: "TypeScript" });

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Hello TypeScript");
const arrNumber = createArrayWithGeneric(42);
const arrObject = createArrayWithGeneric({ id: 1, name: "TypeScript" });

//tuple

// const createArrayWithTuple = (param1: string, param2: string) => [
//   param1,
//   param2,
// ];

// const createArrayWithTuple = (param1: string, param2: number) => [
//   param1,
//   param2,
// ];

// const createArrayWithTuple = (
//   param1: { id: string; name: string },
//   param2: string
// ) => [param1, param2];

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayWithTupleGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const res1 = createArrayWithTupleGeneric<string, string>("Hello", "TypeScript");
const res2 = createArrayWithTupleGeneric<number, number>(10, 20);
const res3 = createArrayWithTupleGeneric<object, string>(
  { id: 1, name: "TS" },
  "TypeScript"
);

const addStudentToCourse = <T>(strudentInfo: T) => {
  return {
    course: "TypeScript",
    ...strudentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Alice",
  hasPencil: false,
};

const student2 = {
  id: 456,
  name: "Bob",
  hasCar: true,
  isMarried: true,
};


const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);

console.log(result);
console.log(result2);