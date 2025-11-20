// Recap of type Allias and Intersection Types
type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user" | "guest";
};

type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "Alice",
  age: 30,
  role: "admin",
};

const user2: UserWithRole = {
  name: "Bob",
  age: 25,
  role: "user",
};

interface IUser {
  name: string;
  age: number;
}
// Interface only works with object type data
const user3: IUser = {
  name: "Charlie",
  age: 28,
};

interface IUserWithRole extends IUser {
  role: "admin" | "user" | "guest";
}

const user4: IUserWithRole = {
  name: "Diana",
  age: 22,
  role: "guest",
};

// Function

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

interface IAdd {
  (a: number, b: number): number;
}

const add2: IAdd = (a, b) => a + b;

type Friends = string[];

const friendsList: Friends = ["Alice", "Bob", "Charlie"];

interface IFriends {
  [index: number]: string;
}

const friendsArray: IFriends = ["Diana", "Eve", "Frank"];
