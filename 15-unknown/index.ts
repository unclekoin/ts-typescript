let input: unknown;

input = 3;
input = ['', ''];
let res1: any = input;

// let res1: string = input; 🚫

function run(i: unknown) {
  if (typeof i === 'number') {
    i++;
  } else {
    i;
  }
}

run(input);

async function getData() {
  try {
    await fetch('');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
