// Create your "classes" here.

function DisplayObject(name) {
}

DisplayObject.prototype.clicked = function() {
    alert('you clicked the thing');
};

function Rect(options) {
    this.x = +options.x;
    this.y = +options.y;
    this.w = +options.width;
    this.h = +options.height;
    this.fillStyle = options.fillStyle;
    this.strokeStyle = options.strokeStyle;
}

// Rect.prototype = DisplayObject.prototype;
Rect.prototype = new DisplayObject();

Rect.prototype.draw = function(ctx) {
    helpers.rect(ctx, this)
};

Rect.prototype.contains = function(x, y) {
    return x >= this.x && x < this.x + this.w &&
           y >= this.y && y < this.y + this.h;
};

// You need Rect, Circle, and Logo classes.
// They can all inherit from a DisplayObject class.

// The constructors for these classes should all take in
// an object full of options. Look at the data- attributes
// in objects.html to see what those options are.

// Each class should have a draw method that takes in a
// canvas context. Use the functions in helpers.js to do
// the actual drawing. Those functions take in a context
// and an object of options. All three functions require
// x and y options, but they vary after that.
