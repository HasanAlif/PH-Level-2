// Object Destructuring, Array Destructuring

// Object Destructuring
const user = {
    id: 101,
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 30,
    profession: "Developer",
    gender: "Male",
    favouriteColor: "Black"
};

const { favouriteColor: myFavouriteColor, name: { lastName: myLastName } } = user;
console.log(myFavouriteColor); // Output: Black
console.log(myLastName); // Output: Doe

// Array Destructuring
const numbers: number[] = [10, 20, 30, 40, 50];
const [first, , third, ...rest] = numbers;
console.log(first); // Output: 10
console.log(third); // Output: 30
console.log(rest); // Output: [40, 50]

const friends: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
const [, myBestFriend, , , myLastFriend] = friends;
console.log(myBestFriend); // Output: Bob
console.log(myLastFriend); // Output: Eve