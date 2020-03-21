// FUNCTIONS

function calcualteAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calcualteAge(1990);
var ageMike = calcualteAge(1948);
var ageJane = calcualteAge(1969);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirement(birthYear, firstName) {
    var age = calcualteAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
