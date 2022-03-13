function getUserFullName(user: { firstname: string; surname: string }): string {
  return `${user.firstname} ${user.surname}`;
}

const user = {
  firstname: 'Max',
  surname: 'Ivanov',
  city: 'Moscow',
  age: 35,
  skills: {
    dev: true,
    devops: true,
  },
};

console.log(getUserFullName(user));
