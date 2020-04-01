// CODING    CHALLENGE

class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    calculateAge() {
        return new Date().getFullYear() - this.buildYear;
    }
}

class Park extends TownElement {
    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} per square km.`);
        return density;
    }

    static averageParkAge(parkArr) {
        let sumAge = 0;
        for(const aPark of parkArr) {
            sumAge += aPark.calculateAge();
        }
        return sumAge / parkArr.length;
    }

    static printPark(parkArr, trees = 1000) {
        for (const aPark of parkArr) {
            if (aPark.numberOfTrees > trees) {
                console.log(`${aPark.name} has more than ${trees} trees.`);
            }
        }
    }
}

class Street extends TownElement {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

const greenPark = new Park(...['Green Park', 1989, 656, 2]);
const nationalPark = new Park(...['National Park', 1945, 1200, 1]);
const oakPark = new Park(...['Oak Park', 1964, 2100, 4]);

const parkArr = [greenPark, nationalPark, oakPark];

console.log('----PARKS REPORT----');
console.log(`Our ${parkArr.length} parks have an average age of ${Park.averageParkAge(parkArr)} years`);
parkArr.map(el => el.treeDensity());
Park.printPark(parkArr);

const oceanAvenue = new Street(...['Ocean Avenue', 1913, 43, 'big']);
const evergreenStreet = new Street(...['Evergreen Street', 1924, 16, 'small']);
const fourthStreet = new Street(...['Fourth Street', 1942, 34]);
const sunsetBlvd = new Street(...['Sunset Boulevard', 1982, 100, 'huge']);

const streetArr = [oceanAvenue, evergreenStreet, fourthStreet, sunsetBlvd];

console.log('----STREETS REPORT----');
let totalStreetLength = 0;
streetArr.map(el => totalStreetLength += el.length);
console.log(`Our ${streetArr.length} streets have a total length of ${totalStreetLength} with an average of ${totalStreetLength / streetArr.length} km.`);

streetArr.map(el => console.log(`${el.name}, built in ${el.buildYear}, is a ${el.size} street.`));