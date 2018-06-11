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
  console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
  yearOfBirth(age);
}

whoAmI('Kyle', 35);