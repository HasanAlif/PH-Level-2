// mapped Types

//map

const arrayOfNum: number[] = [1, 2, 3, 4, 5];

const arrayOfStr: string[] = ["1", "2", "3", "4", "5"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap); // ['1', '2', '3', '4', '5']

type AreaOfNumber = {
  height: number;
  width: number;
};

type height = AreaOfNumber["height"]; // number
type width = AreaOfNumber["width"]; // number

// type AreaOfString = {
//   height: string;
//   width: string;
// };

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };

// type AreaOfString = {
//   [key in keyof AreaOfNumber]: string;
// };

// type Area<T> = {
//   [key in keyof T]: string;
// };

// const area1: Area<{ height: number; width: number }> = {
//   height: "100px",
//   width: "200px",
// };

type Area<T> = {
  [key in keyof T]: string;
};

const area1: Area<{ height: number; width: number }> = {
  height: "100px",
  width: "200px",
};