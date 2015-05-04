console.log('Hello, from script.js!');

var a = '123';

// falsy values: false, 0, '', "", NaN, null, undefined
// truthy values: !falsy, true, 123, 'foo', {}, []

if (a) {
    console.log('a is truthy');
} else {
    console.log('a is falsy');
}

if (a === 123) {
    console.log('a is 123');
} else {
    console.log('a is not 123');
}

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();

    var num = document.getElementById('num').value;

    console.log(typeof num);

    console.log(validateNum(undefined));
});

function validateNum(val) {
    val = val || '';

    if (!val) {
        val = '';
    }

    val = val ? val : '';

    return (/^\d+$/).test(val);
}

function validateArray(arr) {
    // arr = arr || [];

    return arr && arr.length > 0;
}

var arr = null;

if (validateArray(arr)) {

}
