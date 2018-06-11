'use strict';
function yearOfBirth(age) {
  try {
    if (age < 0) throw "Age can not be negative";
  }
  catch(err) { 
    console.log("Error: " + err + ".")
  }
  // Need to know birthday && today's day
  // Need to know if the birthday has already passed in current year
  // if it's passed, current year - age
  // if not passed yet, current year - age - 1
  let yearOfBirth = 2018 - age;
  const birthdayInFuture = (birthday) => {
    // if in future return true
    Date.now()
    // if in past (or today) return false
  }

  if (birthdayInFuture(birthday)) {
    yearOfBirth = currentYear - age - oneYear;
  }
  if (!birthdayInFuture(birthday)) {
    yearOfBirth = currentYear - age;
  }
  return yearOfBirth;
}

function whoAmI(name, age) {
  try {
    if (!name || !age) {
      throw 'Arguments not valid';
    }
    if (typeof age !== 'number') {
      throw 'Age must be a number';
    }
    if (typeof name !== 'string') {
      throw 'name must be a string';
    }

    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log("I was born in " + yearOfBirth(age));

  }  
  
  catch(err) {
    console.error("error: " + err + ".")
  }

}

// Kyle was born July 20, 1982, but since it's 
// not yet July the yearOfBirth is off by one.
// whoAmI('Kyle', 35) should return:
//  "Hi, my name is Kyle and I'm 35 years old.
//   I was born in 1982."
whoAmI('Kyle', 35);