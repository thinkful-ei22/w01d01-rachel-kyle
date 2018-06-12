'use strict'

function beyond(num) {
    let say;
    if (num === Infinity) {
        console.log('And Beyond');
    }
    if (isFinite(num) && num > 0) {
        console.log('To infinity');
    }
    if (isFinite(num) && num < 0) {
        console.log('To negative infinity');
    }
    if (num === 0) {
        console.log('Staying home');
    }
console.log(say);
return say;
};

