const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  profession: string;
  gender: string;
  favouriteColor: string;
  contactNo: number;
  address: {
    division: string;
    district: string;
    thana: string;
    street: string;
  };
} = {
  id: 101,
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 30,
  profession: "Developer",
  gender: "Male",
  favouriteColor: "Black",
  contactNo: 1234567890,
  address: {
    division: "Dhaka",
    district: "Dhaka",
    thana: "Dhanmondi",
    street: "Road 27",
  },
};
const user2: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  profession: string;
  gender: string;
  favouriteColor: string;
  contactNo: number;
  address: {
    division: string;
    district: string;
    thana: string;
    street: string;
  };
} = {
  id: 102,
  name: {
    firstName: "Jane",
    lastName: "Doe",
  },
  age: 30,
  profession: "Developer",
  gender: "Female",
  favouriteColor: "Black",
  contactNo: 1234567890,
  address: {
    division: "Dhaka",
    district: "Dhaka",
    thana: "Dhanmondi",
    street: "Road 27",
  },
};

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  profession: string;
  gender: string;
  favouriteColor: string;
  contactNo: number;
  address: {
    division: string;
    district: string;
    thana: string;
    street: string;
  };
};

const user3: User = {
  id: 103,
  name: { firstName: "Alice", lastName: "Smith" },
  age: 28,
  profession: "Designer",
  gender: "Female",
  favouriteColor: "Blue",
  contactNo: 9876543210,
  address: {
    division: "Chittagong",
    district: "Chittagong",
    thana: "Pahartali",
    street: "Road 15",
  },
};

const user4: User = {
  id: 104,
  name: { firstName: "Bob", lastName: "Johnson" },
  age: 32,
  profession: "Manager",
  gender: "Male",
  favouriteColor: "Green",
  contactNo: 8765432109,
  address: {
    division: "Chittagong",
    district: "Chittagong",
    thana: "Pahartali",
    street: "Road 16",
  },
};

type IsAdmin = true;

const isAdminUser: IsAdmin = true;

type Name = string;

const adminName: Name = "AdminUser";

// Function Type Alias
type AddFunc = (a: number, b: number) => number;
const add: AddFunc = (a: number, b: number): number => {
  return a + b;
};

console.log(add(10, 20));
