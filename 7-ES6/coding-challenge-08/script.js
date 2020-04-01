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

class Streets extends TownElement {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

console.log('----PARKS REPORT----');
