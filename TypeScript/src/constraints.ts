// constrain the generic type T to be an object with an 'id' property of type number

// const addStudentToCourse = <
//   T extends { id: number; name: string; dateOfBirth: string; class: string }
// >(
//   strudentInfo: T
// ) => {
//   return {
//     course: "TypeScript",
//     ...strudentInfo,
//   };
// };

// const student1 = {
//   id: 123,
//   name: "Alice",
//   hasPencil: false,
// };

// const student2 = {
//   id: 456,
//   name: "Bob",
//   hasCar: true,
//   isMarried: true,
// };

// const student3 = {
//   id: 789,
//   name: "Charlie",
//   hasLaptop: true,
// };

type student = {
  id: number;
  name: string;
  dateOfBirth: string;
  class: string;
};

const addStudentToCourse = <T extends student>(strudentInfo: T) => {
  return {
    course: "TypeScript",
    ...strudentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Alice",
  hasPencil: false,
  dateOfBirth: "2000-01-01",
  class: "10th Grade",
};

const student2 = {
  id: 456,
  name: "Bob",
  hasCar: true,
  isMarried: true,
  dateOfBirth: "1998-05-12",
  class: "12th Grade",
};

const student3 = {
  id: 789,
  name: "Charlie",
  hasLaptop: true,
  dateOfBirth: "2001-09-23",
  class: "11th Grade",
};

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
const result3 = addStudentToCourse(student3);

console.log(result);
console.log(result2);
console.log(result3);
