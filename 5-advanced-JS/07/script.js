//    CLOSURES

var retirement = function (retirementAge) {
    var a = ' years till retirement.';
    return function (yearOfBirth) {
        console.log((retirementAge - (2020 - yearOfBirth)) + a);
    }
}

var retirementUS = retirement(66);
var retirementEU = retirement(65);
retirementUS(1993);
retirementEU(1993);