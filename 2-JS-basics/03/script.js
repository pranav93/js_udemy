// VARIABLE MUTATION AND TYPE COERCION

var firstName = 'john';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + 
'. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + 
'. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
