'use strict';
const jediName = (firstName, lastName) => {
  // grab the first 3 letters of lastName and store in a var
  let jediConstruct = [];
  for (let i = 0; i < 3; i++) {
    jediConstruct.push(lastName[i]);
  }

  // grab the first 2 letters of firstName and store in a var
  for (let i = 0; i < 2; i++) {
    jediConstruct.push(firstName[i]);
  }
  let jediName = jediConstruct.join('');
  return jediName;
};

let test1 = jediName('Beyonce', 'Knowles');
console.log(test1);