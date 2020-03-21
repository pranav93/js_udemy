johnTeam = 89 + 120 + 103;
mikeTeam = 116 + 94 + 123;

averageJohnTeam = johnTeam / 3;
averageMikeTeam = mikeTeam / 3;

console.log('averageJohnTeam', averageJohnTeam);
console.log('averageMikeTeam', averageMikeTeam);

if (averageJohnTeam > averageMikeTeam) {
    console.log('John\'s Team wins with ' + averageJohnTeam + ' points');
} else if (averageJohnTeam < averageMikeTeam) {
    console.log('Mike\'s Team wins with ' + averageMikeTeam + ' points');
} else {
    console.log('Both teams have ' + averageMikeTeam + ' points');
}

maryTeam = 97 + 134 + 105;
averageMaryTeam = maryTeam / 3;
console.log('averageMaryTeam', averageMaryTeam);

if (averageJohnTeam > averageMikeTeam && averageJohnTeam > averageMaryTeam) {
    console.log('John\'s Team wins with ' + averageJohnTeam + ' points');
} else if (averageMikeTeam > averageJohnTeam && averageMikeTeam > averageMaryTeam) {
    console.log('Mike\'s Team wins with ' + averageMikeTeam + ' points');
} else if (averageMaryTeam > averageJohnTeam && averageMaryTeam > averageMikeTeam) {
    console.log('Mary\'s Team wins with ' + averageMaryTeam + ' points');
} else {
    console.log('Something else');
}
