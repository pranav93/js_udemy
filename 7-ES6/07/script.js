// ARRAYS    IN    ES6    /    ES2015

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }

// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (el) {
    return el >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
let index = ages.findIndex(cur => cur >= 18);
console.log(index);
let el = ages.find(cur => cur >= 18);
console.log(el);