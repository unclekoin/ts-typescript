interface UserY {
  name: string;
}

const y = {};
assertUser(a);
a.name = 'Max';

function assertUser(obj: unknown): asserts obj is UserY {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }

  throw new Error("Object isn't UserY");
}
