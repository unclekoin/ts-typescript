const n: null = null;
const n1: any = null;

interface SuperUser {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: 'Max',
    } as User;
  }
}

const user1 = getUser();
const userName = user1?.name;