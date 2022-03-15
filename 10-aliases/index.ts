type httpMethod = 'post' | 'get';
type coolString = 'string';

function fetchAuthRequest(urt: string, method: httpMethod) {}

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

type UserWithRole = User & Role;

// type UserWithRole = {
//   role: Role;
//   user: User;
// };

const newUser: UserWithRole = {
  id: 1,
  name: 'Max',
  age: 33,
  skills: ['Dev', 'DevOp'],
};
