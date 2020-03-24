//    BIND,    CALL    AND    APPLY

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies & gentlemen. Hi, I\'m ' + this.name + ', a ' + this.age + ' year old ' + this.job + '.');
        } else if (style === 'friendly') {
            console.log('What\'s up? I\'m ' + this.name + '. Have a nice ' + timeOfDay + '.');
        }
    }
}

console.log('normal');
john.presentation('formal', 'morning');
john.presentation('friendly', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

console.log('call');
john.presentation.call(emily, 'formal', 'afternoon');
john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

console.log('bind');
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('night');

console.log('bind for normal functions');

years = [1945, 1969, 2005, 2001, 1990];

function calcArr(arr, fn) {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function calcAge(el) {
    return 2020 - el;
}

function fullAge(age, el) {
    return el >= age;
}

var fullAgeJpn = fullAge.bind(this, 20);

var ages = calcArr(years, calcAge);
console.log(ages);

var fullAges = calcArr(ages, fullAgeJpn);
console.log(fullAges);
