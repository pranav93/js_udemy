var markWeight = 80;
var johnWeight = 60;

var markHeight = 1.9;
var johnHeight = 1.72;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

var doesMarkHaveHigherBMI = markBMI > johnBMI;
console.log("Does Mark have higher BMI than John? " + doesMarkHaveHigherBMI);
