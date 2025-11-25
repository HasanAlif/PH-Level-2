class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    return `${this.name} is sleeping for ${numOfHours} hours`;
  }
}

class Student extends Parent {}

const student1 = new Student("Alif", 21, "Dhaka");
console.log(student1);
console.log(student1.getSleep(15));

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);

    this.designation = designation;
  }

  getSleep(numOfHours: number) {
    return `${this.name} is sleeping for ${numOfHours} hours`;
  }

  takeClass() {
    return `${this.name} is taking class as a ${this.designation}`;
  }
}

const teacher1 = new Teacher("Sirajum", 35, "Dhaka", "Professor");
console.log(teacher1);
console.log(teacher1.takeClass());
