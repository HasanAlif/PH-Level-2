// Function
// Arrow Function, Function with parameters and return type

function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

addArrow(5, 10);

// Object => Function => Method
let poorUser = {
  name: "Eve",
  balance: 0,
  addbalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addbalance(100);

const arr: number[] = [1, 4, 6, 8, 10];

const sqrArray = arr.map((elem: number): number => elem * elem);

console.log(sqrArray);