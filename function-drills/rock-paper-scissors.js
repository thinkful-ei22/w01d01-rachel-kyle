'use strict';

const rockPaperScissors = (num) => {
  const isValidNumber = (num) => {
    const errMessage = 'Player must enter a whole number between 1 - 3';
    if (typeof num !== 'number') throw errMessage;
    if (!Number.isInteger(num)) throw errMessage;
    if (num < 1) throw errMessage;
    if (num > 3) throw errMessage;
  };
  try {
    isValidNumber(num);
    const playerOption = num;
    const randomNo = Math.floor(Math.random() * 3) + 1;

    let outcome;
    switch(num) {
    case 1 : {
      const playerChoice = 'Rock';
      switch(randomNo) {
      case 1 : {
        outcome = `Uh-oh! It's a tie. You both chose ${playerChoice}. Try again!`;
        break;
      }
      case 2 : {
        const compChoice = 'Paper';
        outcome = `${compChoice} beats ${playerChoice}. You lose!`;
        break;
      }
      case 3 : {
        const compChoice = 'Scissors';
        outcome = `${playerChoice} beats ${compChoice}. You win!`;
        break;
      }
      }
      break;
    }
    case 2 : {
      const playerChoice = 'Paper';
      switch(randomNo) {
      case 1 : {
        const compChoice = 'Rock';
        outcome = `${playerChoice} beats ${compChoice}. You win!`;
        break;
      }
      case 2 : {
        outcome = `Uh-oh! It's a tie. You both chose ${playerChoice}. Try again!`;
        break;
      }
      case 3 : {
        const compChoice = 'Scissors';
        outcome = `${compChoice} beats ${playerChoice}. You lose!`;
        break;
      }
      }
      break;
    }
    case 3 : {
      const playerChoice = 'Scissors';
      switch(randomNo) {
      case 1 : {
        const compChoice = 'Rock';
        outcome = `${compChoice} beats ${playerChoice}. You lose!`;
        break;
      }
      case 2 : {
        const compChoice = 'Paper';
        outcome = `${playerChoice} beats ${compChoice}. You win!`;
        break;
      }
      case 3 : {
        outcome = `Uh-oh! It's a tie. You both chose ${playerChoice}. Try again!`;
        break;
      }
      }
      break;
    }
    }

    return outcome;
  }
  catch(err) {
    console.error(err);
  }

};

const rock = rockPaperScissors(1);
const scissors = rockPaperScissors(2);
const paper = rockPaperScissors(3);
const wordArg = rockPaperScissors('rock');
const negArg = rockPaperScissors(-2);

console.log(rock);
console.log(paper);
console.log(scissors);
console.log(wordArg);
console.log(negArg);