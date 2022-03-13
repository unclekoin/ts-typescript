"use strict";
function getUserFullName(user) {
    return `${user.firstname} ${user.surname}`;
}
const user = {
    firstname: 'Max',
    surname: 'Ivanov',
    city: 'Moscow',
    age: 35,
};
console.log(getUserFullName(user));
