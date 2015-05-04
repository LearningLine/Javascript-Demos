declaration();
// expression();

// functions as first-class citizens

var num = 123;
var str = 'abc';
var fun = function() {};

console.log(num);
console.log(str);
console.log(fun);

console.log(123);
console.log('abc');
console.log(function() {});

var obj = {
    num: 123,
    str: 'abc',
    fun: function() {}
};

// function expression vs function declarations

var expression = function() {
};

function declaration() {
    console.log('declaration');
}

var foo = 123;

function scope() {
    var foo;
    console.log('what is this:', foo); // 123 or 456? actually undefined
    foo = 456;
    console.log(window.foo); // 123
    console.log(foo); // 456
}

scope();

function outer() {
    var myVar = 123;

    function inner() {
        console.log(myVar); // 123 or 456?
    }

    inner();

    myVar = 456;

    inner();
}

outer();

// function init() {
//     var buttons = document.querySelectorAll('button');
//
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//
//         // var j = i; // works in C#, not in JS
//
//         // addClickListener(i);
//         //
//         // function addClickListener(j) {
//         //     button.addEventListener('click', function() {
//         //         alert('You clicked button # ' + (j + 1) + '!');
//         //     });
//         // }
//
//         // IIFE - immediately invoked function expression
//         (function(j) {
//             button.addEventListener('click', function() {
//                 alert('You clicked button # ' + (j + 1) + '!');
//             });
//         })(i);
//     }
// }
//
// init();

var arr = [ 1, 2, 3 ];

arr.forEach(function(val, i) {
    console.log(val);
});

// function init() {
//     var buttons = document.querySelectorAll('button');
//
//     buttons.forEach = arr.forEach;
//
//     buttons.forEach(function(button, i) {
//         var num = i + 1;
//
//         button.addEventListener('click', function() {
//             alert('You clicked button # ' + num + '!');
//         });
//     });
// }
//
// init();

function init() {
    var buttons = document.querySelectorAll('button');

    var forEach = arr.forEach;

    forEach.call(buttons, function(button, i) {
        var num = i + 1;

        button.addEventListener('click', function() {
            alert('You clicked button # ' + num + '!');
        });
    });
}

init();

//
