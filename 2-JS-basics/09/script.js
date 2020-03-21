// TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

if (height == '23') {
    console.log('Javascript does type coercion.');
}

if (height === '23') {
    console.log('Javascript does type coercion.');
} else {
    console.log('Javascript doesn\'t do type coercion.');
}
