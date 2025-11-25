// OOP : instanceOf Guard --- Type Guard

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  sleep(numOfHours: number) {
    console.log(`${this.name} is sleeping for ${numOfHours} hours.`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  study(numOfHours: number) {
    console.log(`${this.name} is studying for ${numOfHours} hours.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  teach(numOfHours: number) {
    console.log(`${this.name} is teaching for ${numOfHours} hours.`);
  }
}

//function guard

const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

// const getUserInfo = (user: Person) => {
//   if (user instanceof Student) {
//     user.study(5);
//   } else if (user instanceof Teacher) {
//     user.teach(5);
//   } else {
//     user.sleep(5);
//   }
// };

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.study(5);
  } else if (isTeacher(user)) {
    user.teach(5);
  } else {
    user.sleep(5);
  }
};

const student1 = new Student("Alif");
const teacher1 = new Teacher("Sirajum");
const person1 = new Person("Mr Person");
getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);