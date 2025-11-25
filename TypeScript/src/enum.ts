// enum

// set of fixed string values

// type UserRoles = "Admin" | "User" | "Guest";

// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "User") {
//     return true;
//   } else return;
// };

// const isEditAllowed = canEdit("Admin");

// console.log(isEditAllowed); // true

enum UserRoles {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.User) {
    return true;
  } else return false;
};

const isEditAllowed = canEdit(UserRoles.Admin);
console.log(isEditAllowed); // true
