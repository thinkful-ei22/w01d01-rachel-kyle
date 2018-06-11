'use strict';
function yearOfBirth(age) {
  let yearOfBirth = 2018 - age;
  console.log("I was born in " + yearOfBirth); 
  try {
    if (age < 0) throw "Age can not be negative";
  }
  catch(err) { 
    console.log("Error: " + err + ".")
  }
  return 2018-age;
}

function whoAmI(name, age) {
  try {
    if (!(name && age)) {
      throw 'Arguments not valid';
    }
    if (typeof age !== 'number') {
      throw 'Age must be a number';
    }
    if (typeof name !== 'string') {
      throw 'name must be a string';
    }

    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    yearOfBirth(age);

  }  
  
  catch(err) {
    console.error("error: " + err + ".")
  }

}

whoAmI('Kyle', "35");