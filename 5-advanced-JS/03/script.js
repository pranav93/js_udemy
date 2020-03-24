//    PRIMITIVES    VS.    OBJECTS

// PRIMITIVES

console.log('PRIMITIVES');
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

// OBJECTS

console.log('OBJECTS');

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// FUNCTIONS

console.log('FUNCTIONS');

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'   
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);
console.log(age);
console.log(obj);
