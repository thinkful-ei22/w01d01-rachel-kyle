'use strict';
const beyond = (num) => {
  let message;
  if (num === Infinity) {
    message = 'And beyond';
  }
  if (isFinite(num) && num > 0) {
    message = 'To infinity';
  }
  if (isFinite(num) && num < 0) {
    message = 'To negative infinity';
  }
  if (num === 0) {
    message = 'Staying home';
  }

  console.log(message);
  return message;
};



// TEST CASES
let test1 = beyond(Infinity);
let test2 = beyond(78);
let test3 = beyond(-4);
let test4 = beyond(0);

console.log(`Infinity returns: ${test1}`);
console.log(`78 returns: ${test2}`);
console.log(`-4 returns: ${test3}`);
console.log(`0 returns: ${test4}`);