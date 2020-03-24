//    FIRST    CLASS    FUNCTIONS    :    PASSING    FUNCTIONS    AS    ARGUMENTS

var years = [1990, 1965, 1937, 2005, 1998];

function arrCalc(arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

var ages = arrCalc(years, calculateAge);
console.log(ages);

function isFullAge(el) {
    return el >= 18;
}

fullAges = arrCalc(ages, isFullAge);
console.log(fullAges);

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var rates = arrCalc(ages, maxHeartRate);
console.log(rates);