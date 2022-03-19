let x = '5';
let s: number = parseInt(x);
let e: number = Number(x);
let f: number = new Number(x).valueOf();

interface UserA {
  name: string;
  email: string;
  login: string;
}

// const userA: UserA = {
//   name: 'Max',
//   email: 'max@mail.com',
//   login: 'max45',
// } as UserA;

// const userA = <UserA> {
//   name: 'Max',
//   email: 'max@mail.com',
//   login: 'max45',
// };

const userA: UserA = {
  name: 'Max',
  email: 'max@mail.com',
  login: 'max45',
};

interface Admin {
  name: string;
  role: number;
}

function userToAdmin(user: UserA): Admin {
  return {
    name: user.name,
    role: 12,
  };
}
