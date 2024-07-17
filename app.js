export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function multi(a, b) {
  return a * b;
}

export function div(a, b) {
  return a / b;
}

export function isItaPal(str) {
  let rev = str.split("").reverse().join;
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}
let str = "kayak";
console.log(str);
