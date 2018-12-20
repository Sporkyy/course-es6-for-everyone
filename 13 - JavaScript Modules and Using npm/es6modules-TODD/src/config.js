// Named export
export const apiKey = 'abc123';

export const url = 'https://wesbos.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'lassie';

export { age as old, dog };
