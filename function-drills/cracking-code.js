'use strict';

function decode(word){
  let decodedCharacter;
  switch (word[0]) {
  case 'a' : {
    decodedCharacter = word[1];
    break;
  }
  case 'b' : {
    decodedCharacter = word[2];
    break;
  }
  case 'c' : {
    decodedCharacter = word[3];
    break;
  }
  case 'd' : {
    decodedCharacter = word[4];
    break;
  }
  default : {
    decodedCharacter = ' ';
  }

  }

  return decodedCharacter;
};
