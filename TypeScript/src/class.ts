// OOP  ---  Class  ---  Object

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound(): string {
    return `${this.name} says ${this.sound}`;
  }
}

const dog = new Animal("Dogesh", "Dog", "Ghew Ghew");
console.log(dog);

const cat = new Animal("Meowsh", "Cat", "Meow Meow");
console.log(cat.sound);
console.log(cat.makeSound());

class Animal2 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound(): string {
    return `${this.name} says ${this.sound}`;
  }
}
