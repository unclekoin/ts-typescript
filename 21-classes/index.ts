class Human {
  name: string;
  age: number;

  //overload
  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName;
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName;
    }

    if (typeof age === 'number') this.age = age;
  }
}

const human = new Human('Max');
const human1 = new Human('Max', 33);
const human2 = new Human();
const human3 = new Human(33);
