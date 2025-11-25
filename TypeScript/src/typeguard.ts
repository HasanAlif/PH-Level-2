// type guards in TypeScript

// in typeof

type Alphanumeric = string | number;

// const add = (num1: number | string, num2: number | string) => {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 + num2;
//     } else {
//         return num1.toString() + num2.toString();
//     }
// };


const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
};

console.log(add(5, 10));
console.log(add("Hello, ", "World!"));
console.log(add(5, " apples"));

type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: 'admin';
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    } else {
        return `I am a normal user`;
    }
}