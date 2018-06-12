'use strict';

function numDaysInMonth(month, leapYear=false) {
  try {
    let numDays;
    switch(month) {
    case 'January' :
    case 'March' :
    case 'May' :
    case 'July' :
    case 'August' :
    case 'October' :
    case 'December' : {
      numDays = 31;
      break;
    }
    case 'April' :
    case 'June' :
    case 'September' :
    case 'November' : {
      numDays = 30;
      break;
    }
    case 'February' : {
      if (leapYear) {
        numDays = 29;
      }
      else {
        numDays = 28;
      }
      break;
    }
    default : {
      throw 'Must provide a valid month.';
    }
    }
    
    let numDaysMessage = `${month} has ${numDays} days`;
    return numDaysMessage;
  }
  catch(err) {
    console.error(err);
  }
};