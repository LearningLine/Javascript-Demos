var arr = [ 'a', 'b', 'c' ];

arr.foo = 'bar';
arr.baz = function() {};

for (var i = 0; i < arr.length; i++) {
    var letter = arr[i];
    console.log(letter);
}

// THIS IS WRONG:
for (var i in arr) {
    var letter = arr[i];
    console.log(letter);
}

var obj = {
    name: 'Jason',
    age: 40
};

for (var key in obj) {
    console.log(key, obj[key]);
}
