//define your array here

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
];

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
}

function appendKitten(name) {
  return kittens = [...kittens, name];
}
