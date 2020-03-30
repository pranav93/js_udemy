// LECTURE    :    STRINGS    IN    ES6 / ES2015

let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1990;

function calcAge(year) {
    return 2020 - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));

console.log(n.endsWith('h'));
console.log(n.endsWith('H'));

console.log(n.includes(' '));
console.log(n.includes('oh'));

console.log(`${firstName} `.repeat(5));