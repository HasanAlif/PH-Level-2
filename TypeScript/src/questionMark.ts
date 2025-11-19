// ? : ternary operator  : decision making operator
// ?? : nullish coalescing operator :  handling null or undefined values
// ?. : optional chaining operator : accessing nested object properties safely

// ? : ternary operator  : decision making operator
const userAge = 17;

const isAdult = (age: number) => {
  if (userAge >= 18) {
    console.log("User is an adult");
  } else {
    console.log("User is a minor");
  }
};
isAdult(userAge); // Output: User is a minor

const isAdultTernary = userAge >= 18 ? "User is an adult" : "User is a minor";
console.log(isAdultTernary); // Output: User is a minor

// ?? : nullish coalescing operator :  handling null or undefined values
const userTheme = undefined;

const selectedTheme = userTheme ?? "light mode";
console.log(selectedTheme); // Output: light mode

const isAuthenticated = null;

const authStatus = isAuthenticated ? isAuthenticated : "Guest User";
console.log(authStatus); // Output: Guest User

// ?. : optional chaining operator : accessing nested object properties safely
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "New York",
    town: "Brooklyn",
  },
};
const postalCode = user.address?.postalCode;
console.log(postalCode); // Output: undefined
