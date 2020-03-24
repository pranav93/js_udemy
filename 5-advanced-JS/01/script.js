// CREATING    OBJECTS   :    FUNCTION    CONSTRUCTORS
// THE    PROTOTYPE    CHAIN IN    THE    CONSOLE

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcualteAge = function () {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcualteAge();
jane.calcualteAge();
mark.calcualteAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
