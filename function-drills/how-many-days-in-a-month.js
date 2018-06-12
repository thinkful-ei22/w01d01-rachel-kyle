'use strict';
const numDaysInMonth = (month, leapYear=false) => {
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

let test01 = numDaysInMonth('January');
let test02a = numDaysInMonth('February');
let test02b = numDaysInMonth('February', true);
let test03 = numDaysInMonth('March');
let test04 = numDaysInMonth('April', true);
let test05 = numDaysInMonth('May');
let test06 = numDaysInMonth('June');
let test07 = numDaysInMonth('July');
let test08 = numDaysInMonth('August');
let test09 = numDaysInMonth('September');
let test10 = numDaysInMonth('October');
let test11 = numDaysInMonth('November');
let test12 = numDaysInMonth('December');
let test13 = numDaysInMonth('FakeMonth');

let tests = [test01, test02a, test02b, test03, test04, test05, test06, test07, test08, test09, test10, test11, test12, test13];
tests.forEach(test => console.log(test));