const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

const age = 100;
const people = ['Wes', 'Kait'];

const fullNames = people.map(name => `${name} Bos`);

function doubleSay(str) {
  return str + ', ' + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + '!';
}

let result = 'hello' |> doubleSay |> capitalize |> exclaim;
