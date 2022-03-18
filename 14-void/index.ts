function printId(id: string | number): void {
  console.log(id);
}

const someId = printId(1);

function multiply2(f: number, s: number) {
  if (!s) return f * f;
}

type voidFunction = () => void;

const f1: voidFunction = () => { }

const f2: voidFunction = () => true;

const b = f2()

console.log(b);