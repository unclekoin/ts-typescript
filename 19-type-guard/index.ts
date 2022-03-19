function logId(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }

  console.log(id);
}

function isString(x: string | number): x is string {
  return typeof x === 'string';
}

interface UserB {
  name: string;
  email: string;
  login: string;
}

const userB: UserB = {
  name: 'Max',
  email: 'max@mail.com',
  login: 'max45',
};

interface Admin {
  name: string;
  role: number;
}

function isAdmin(user: UserB | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: UserB | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: UserB | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("User isn't admin");
  }
}
