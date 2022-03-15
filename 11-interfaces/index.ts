interface Person {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface PersonRole {
  roleId: number;
}

// interface PersonWithRole extends Person {
//   roleId: number;
// }

interface PersonWithRole extends Person, PersonRole {
  createdAt: Date;
}

const person: PersonWithRole = {
  roleId: 1,
  name: 'Max',
  age: 33,
  skills: ['Dev', 'DevOp'],
  createdAt: new Date(),

  log(id) {
    return '';
  },
};

interface UserDict {
  [index: number]: Person;
}

type UserDict2 = {
  [index: number]: Person;
};

type ud = Record<number, Person>;
