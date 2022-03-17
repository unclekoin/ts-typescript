// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS,
//   FAILED,
// }

enum StatusCode {
  SUCCESS = 's',
  IN_PROCESS = 'p',
  FAILED = 'f',
}

const response = {
  message: 'Success',
  statusCode: StatusCode.SUCCESS,
};

if (response.statusCode === StatusCode.SUCCESS) { }

function action(status: StatusCode) { }

action(StatusCode.SUCCESS);

enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN;