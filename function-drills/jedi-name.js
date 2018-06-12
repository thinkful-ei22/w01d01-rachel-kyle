'use strict'

function jediName(firstName,lastName) {
    let makeName = [];
    for (let i = 0; i < 3; i++) {
        makeName.push(lastName[i]);
    }

    for (let i = 0; i < 2; i++) {
        makeName.push(firstName[i]);
    }
    let jediName = makeName.join('');
    return jediName
}

let testJediName = jediName('Twiggy', 'Dany');
console.log(testJediName);