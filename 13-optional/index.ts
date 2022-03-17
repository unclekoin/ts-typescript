// interface NewUser {
//   login: string;
//   password?: string;
// }

type NewUser = {
  login: string;
  password?: string;
};

const someUser: NewUser = {
  login: 'user@mail.com',
  // password: '12345'
};

function multiply(first: number, second?: number): number {
  if (!second) return first * first;

  return first * second;
}

interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary';
  };
}

function testPass(user: UserPro) {
  const type = user.password?.type;
}

function test(param?: number) {
  return param ?? 'something';
}
