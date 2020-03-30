// LECTURE    :    VARIABLE    DECLARATIONS    WITH    LET    AND    CONST

// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6

const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);

function driverLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driverLicence5(true);

function driverLicence6(passedTest) {

    // console.log(firstName);
    // variables defined with const or let cannot be used before the declaration

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        // let firstName = 'John';
        // const yearOfBirth = 1990;
        // let and const are block scoped, and cannot be used outside block
        firstName = 'John'
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driverLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
    // This "i" is different than outer "i"
}

console.log(i);

var j = 23;

for (var j = 0; j < 5; j++) {
    console.log(j);
    // This "j" overwrites the outer "j"
}

console.log(j);