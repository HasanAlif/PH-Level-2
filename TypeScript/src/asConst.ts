// as const assertion in enums

// enum UserRoles {
//   Admin = "Admin",
//   User = "User",
//   Guest = "Guest",
// }

const UserRoles = {
  Admin: "Admin",
  User: "User",
  Guest: "Guest",
} as const;

const UserRoles2 = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST",
} as const;

// UserRoles.Admin = "SuperAdmin"; // Error: Cannot assign to 'Admin' because it is a read-only property.

/*
 readonly Admin: "Admin",
 readonly User: "User",
 readonly Guest: "Guest",

 typeof operator
 keyof operator

 const user = {
 id: 222,
 name: "Ali",
}

user['id'] => 222
user['name'] => "Ali"

typeof User ;

{
    id: number;
    name: string;
}

typeof UserRoles ;
{
    Admin: "Admin";
    User: "User";
    Guest: "Guest";
}

keyof typeof UserRoles ;
"Admin" | "User" | "Guest"

'ADMIN' | 'USER' | 'GUEST'

UserRoles2['Admin'] => 'ADMIN'

UserRoles2[keyof typeof UserRoles] => 'ADMIN' | 'USER' | 'GUEST'

*/

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.User) {
    return true;
  } else return false;
};

const canEdit2 = (role: (typeof UserRoles2)[keyof typeof UserRoles2]) => {
  if (role === UserRoles2.Admin || role === UserRoles2.User) {
    return true;
  } else return false;
};

const isEditAllowed = canEdit(UserRoles.Admin);
const isEditAllowed2 = canEdit2(UserRoles2.Admin);
console.log(isEditAllowed); // true
console.log(isEditAllowed2); // true