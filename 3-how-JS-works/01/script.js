// HOISTING    IN    PRACTICE

// FUNCTION    HOISTING
console.log('FUNCTION HOISTING');
console.log(calculateAge(1990));

function calculateAge(params) {
    return 2020 - params
}

// console.log(retirement(1990), 1); -> uncaughtreference error
retirement = function (params) {
    return 65 - calculateAge(params);
}

console.log(retirement(1990), 2);

console.log('VARIABLE HOISTING');
// VARIABLE    HOISTING
var a = 12;
console.log(12);

console.log(b);
var b = 14;

function aFunction() {
    console.log(b);
    var b = 20;
    console.log(b);
}

aFunction();
console.log(b);
