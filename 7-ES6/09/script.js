// REST    PARAMETERS

// ES5
function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (el) {
        console.log(2020 - el >= 18);
    });
}

// isFullAge5(1995, 2009, 1969, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(el => console.log(2020 - el >= 18));
}
// isFullAge6(1995, 2009, 1969, 2016, 1987);

// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);
    argsArr.forEach(function (el) {
        console.log(2020 - el >= limit);
    });
}

// isFullAge5(16, 1995, 2009, 1969, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(el => console.log(2020 - el >= limit));
}
isFullAge6(16, 1995, 2009, 1969, 2016, 1987);