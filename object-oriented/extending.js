(function() {
    var name = 'jason';

    // don't extend Object.prototype!!
    // Object.prototype.foo = function() {
    //     console.log('foo');
    // };

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    name = name.capitalize();

    // delete String.prototype.toUpperCase;
    // name.toUpperCase();

    console.log(name);

    // name.foo();
    // [].foo();
    // ({}).foo();
    // (function() {}).foo();    
})();
