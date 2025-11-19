// Union and Intersection Types

// Union

type userRole = "admin" | "user";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

console.log(getDashboard("admin"));

// Intersection

type Employee = {
  id: number;
  name: string;
  phoneNo: number;
};

type Manager = {
  department: string;
  level: number;
};

type ManagerEmployee = Employee & Manager;

const managerEmployee: ManagerEmployee = {
  id: 1,
  name: "John Doe",
  phoneNo: 1234567890,
  department: "Sales",
  level: 2,
};

console.log(managerEmployee);
