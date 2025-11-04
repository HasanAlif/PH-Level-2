<<<<<<< HEAD
const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortedNumber = numbers.sort((a, b) => a - b);

console.log(numbers);
console.log(sortedNumber);

const tagsFromPosts = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"],
];

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];
=======
// const numbers = [40, 100, 1, 5, 25, 10];
// const fruits = ["Banana", "apple", "Cherry", "date"];

// const acendingSortedNumber = numbers.sort((a, b) => a - b);
// const decendingSortedNumber = numbers.sort((a, b) => b - a);
//console.log(numbers);
//console.log(acendingSortedNumber);
//!console.log(decendingSortedNumber);

// fruits.sort();
// fruits.sort((a, b) => a.localeCompare(b));
//! console.log(fruits);

// const arr = [1, 2, 3, [4, 5]];
// const flatArr = arr.flat();
//! console.log(flatArr)

// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11, [12, [13, 14]]]]]]];
// const flatArr = arr.flat(Infinity);
//! console.log(flatArr);

// const tagsFromPosts = [
//   ["javascript", "react", "css"],
//   ["node", "express"],
//   ["css", "html", "react"],
// ];
// const filterTags = [...new Set(tagsFromPosts.flat())];
//! console.log(filterTags)

// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((num) => num % 2 === 0);
//! console.log(hasEvenNumber);

// const currentUserRoles = ["user", "editor"];
// const featureAccessRoles = ["admin", "manager"];
// const canAccess = currentUserRoles.some((role) => featureAccessRoles.includes(role));
//! console.log(canAccess);

// const arr = Array.from({ length: 5 }).map((_, index) => index + 1);
//! console.log(arr);

// const range = (start, stop, step) => {
//   return Array.from(
//     { length: Math.ceil((stop - start) / step) },
//     (_, index) => start + index * step
//   );
// };
//! console.log(range(1, 11, 1));

// const numbers = [1,2,3,4,5];
// const hasEvenNumber = numbers.some((num) => num % 2 === 0);
//! console.log(hasEvenNumber);

// const cartItems = [
//     { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
//     { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
//     { id: "p-003", name: "Arong Kurta", price: 2200, quantity: 1 },
// ];
// const subtotal = cartItems.reduce((subtotal, product) => {
//     return subtotal + product.price * product.quantity;
// }, 0);
//! console.log(subtotal);

// const players = [
//     { name: "Jamal Bhuyan", score: 88 },
//     { name: "Sheikh Morsalin", score: 81 },
//     { name: "Rakib Hossain", score: 95 },
//     { name: "Topu Barman", score: 91 },
//     { name: "Sohel Rana", score: 72 },
// ];
// const bestScorer = players.reduce((bestPlayer, currentPlayer) => {
//     return currentPlayer.score > bestPlayer.score ? currentPlayer : bestPlayer;
// }, players[0]);
//! console.log(bestScorer);

// const postsArray = [
//   { id: "p-101", title: "Intro to SQL", author: "Alex" },
//   { id: "p-102", title: "Data Structure in JS", author: "Beth" },
//   { id: "p-103", title: "Understanding Reduce", author: "Chris" },
//   { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
// ];
// const lookupTable = postsArray.reduce((table, post) => {
//   table[post.id] = post;
//   return table;
// }, {});
// console.log(lookupTable);
// const post = lookupTable["p-103"];
//! console.log(post);

// const surveyResponses = [
//   "A",
//   "C",
//   "B",
//   "A",
//   "B",
//   "A",
//   "C",
//   "B",
//   "A",
//   "B",
//   "C",
//   "A",
//   "B",
//   "C",
//   "A",
//   "B",
//   "C",
// ];

// TODO initiate empty object
// TODO Check if the response already exists or not
// TODO If exists increment the count
// TODO If not exists set the count to 1

// const count = surveyResponses.reduce((table, response) => {
//   console.log(table, ":", response);

//   if (table[response]) {
//     table[response] += 1;
//   } else {
//     table[response] = 1;
//   }
//   return table;
// }, {});
//! console.log(count);

// Scenario: You have a flat array of sales data, and you need to group the sales by category
// calculating the total revenue and the number of items sold for each.
// const sales = [
//   { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
//   { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
//   { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
//   { category: "Home", item: "Chair", price: 150, quantity: 1 },
//   { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
//   { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
// ];

// TODO  initiate empty object
// TODO initialite object category
// TODO calculate total revenue

// const totalSalesByCategory = sales.reduce((table, sale) => {
//   const { category, price, quantity } = sale;

//   if (!table[category]) {
//     table[category] = {
//       totalRevenue: 0,
//       itemCount: 0,
//     };
//   }
//   table[category].totalRevenue += price * quantity;
//   table[category].itemCount += quantity;
//   return table;
// }, {});
//! console.log(totalSalesByCategory);

// const users = [
//   { id: 101, name: "Alice" },
//   { id: 102, name: "Bob" },
//   { id: 103, name: "Charlie" },
// ];

// const posts = [
//   { id: 1, userId: 101, title: "Post by Alice 1" },
//   { id: 2, userId: 102, title: "Post by Bob 1" },
//   { id: 3, userId: 101, title: "Post by Alice 2" },
//   { id: 4, userId: 103, title: "Post by Charlie 1" },
//   { id: 5, userId: 102, title: "Post by Bob 2" },
// ];

// TODO create a hashtable of posts

// const postsByUserId = posts.reduce((table, post) => {
//   const { userId } = post;

//   if (!table[userId]) {
//     table[userId] = [];
//   }
//   table[userId].push(post);
//   return table;
// }, {});

// const usersWithPosts = users.map((user) => {
//   return {
//     ...user,
//     posts: postsByUserId[user.id] || [],
//   };
// });
//! console.log(JSON.stringify(usersWithPosts));

const events = [
    { timestamp: '2024-10-01T10:00:00Z', type: 'click' },
    { timestamp: '2024-10-01T10:05:00Z', type: 'scroll' },
    { timestamp: '2024-10-01T10:10:00Z', type: 'click'},
    { timestamp: '2024-10-01T10:15:00Z', type: 'scroll' },
    { timestamp: '2024-10-01T10:20:00Z', type: 'scroll' },
    { timestamp: '2024-10-01T10:25:00Z', type: 'click' },
    { timestamp: '2024-10-01T10:30:00Z', type: 'click' },
]
>>>>>>> c949f08 (Practice Day-2)
