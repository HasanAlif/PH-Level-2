// Spread Operator

const friends = ["Alice", "Bob", "Charlie"];

const schoolFriends = ["David", "Eve"];

const collageFriends = ["Frank", "Grace"];

const allFriends = [...friends, ...schoolFriends, ...collageFriends];

console.log(allFriends);

const user = {
  name: "Alice",
  age: 25,
  address: "123 Main St",
};

const otherInfo = {
  profession: "Engineer",
  country: "USA",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// Rest Operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Invitation sent to ${friend}`);
  });
};

sendInvite("Alice", "Bob", "Charlie", "David");
