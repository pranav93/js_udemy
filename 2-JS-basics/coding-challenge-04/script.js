// OBJECTS AND METHODS

var john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 60,
    height: 1.5,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    weight: 80,
    height: 1.7,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}

console.log(john.calcBMI());
console.log(mark.calcBMI());

if (john.BMI > mark.BMI) {
    console.log('John has higher BMI ' + john.BMI + '.');
} else if (john.BMI < mark.BMI) {
    console.log('Mark has higher BMI ' + mark.BMI + '.');
} else {
    console.log('Both have same BMI.');
}