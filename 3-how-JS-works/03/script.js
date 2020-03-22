// SCOPING    AND    THE    SCOPE    CHAIN

var a = 'Hi';

one();

function one() {
    var b = 'Hello';
    two();

    function two() {
        var c = 'John';
        three();
    }
}

function three() {
    console.log(a + b + c);
}
