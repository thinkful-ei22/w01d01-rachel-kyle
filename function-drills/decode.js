'use strict';
const decode = (word) => {
  let decodedLetter;
  switch (word[0]) {
  case 'a' : {
    decodedLetter = word[1];
    break;
  }
  case 'b' : {
    decodedLetter = word[2];
    break;
  }
  case 'c' : {
    decodedLetter = word[3];
    break;
  }
  case 'd' : {
    decodedLetter = word[4];
    break;
  }
  default : {
    decodedLetter = ' ';
  }
  // close switch statement
  }

  return decodedLetter;
};

const decodeMessage = (message) => {
  let decodedConstructor = [];
  let words = message.split(' ');
  words.forEach(word => {
    let newLetter = decode(word);
    decodedConstructor.push(newLetter);
  });

  let decodedMessage = decodedConstructor.join('');
  return decodedMessage;
};

let test1 = decodeMessage('craft block argon meter bells brown croon droop');
console.log(test1);