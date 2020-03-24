//    CREATING    OBJECTS   :    OBJECT.CREATE

var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
john.calculateAge();

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'},
});
jane.calculateAge();
