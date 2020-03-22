// THE    'THIS'    KEYWORD    IN    PRACTICE

function aFunction() {
    console.log(this); // "this" refers to window object
}

aFunction();

var john = {
    firstName: "John",
    lastName: "Wayne",
    birthYear: 1990,
    calculateAge: function () {
        console.log(this); // this refers to john object
        console.log(2020 - this.birthYear);

        bFunction();
        function bFunction() {
            console.log(this); // this refers to window object
        }
    }
}

console.log("Calling john's method");
john.calculateAge();

var mike = {
    firstName: "Mike",
    lastName: "Tyson",
    birthYear: 1965
}

mike.calculateAge = john.calculateAge;
// borrowed the function "calculateAge"

console.log("Calling mike's borrowed method");
mike.calculateAge();
// this refers to mike object
// any "this" inside normal inner function refers to the window object
