// nullable types

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB : ${input}`);
  } else {
    console.log("From DB: All users");
  }
};

getUser(null);

// unknown type
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discount = input * 0.1;
    console.log(`Discount is: ${discount}`);
  } else if (typeof input === "string") {
    const discount = parseFloat(input) * 0.1;
    console.log(`Discount is: ${discount}`);
  } else {
    console.log("Invalid input for discount calculation");
  }
};

discountCalculator(100);
discountCalculator("50 TK");
discountCalculator(true);
discountCalculator(null);

// void and never type

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("This is a critical error");
