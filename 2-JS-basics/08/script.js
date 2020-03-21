// THE TERNARY OPERATOR AND SWITCH STATEMENTS

var firstName = 'John';
var age = 20;

age >= 18 ? console.log(firstName + ' drinks beer.') : 
console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer': 'juice';
console.log(firstName + ' drinks ' + drink + '.');

if (age >= 18) {
    drink = 'beer';
} else {
    drink = 'juice';
}
console.log(firstName + ' drinks ' + drink + '.');

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
            console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
