// OBJECTS AND METHODS

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2020 - this.birthYear;
    }
}

console.log(john.calcAge());
console.log(john);