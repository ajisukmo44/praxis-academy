Shape = {
    type: 'Shape',
    getType: function () {
        return this.type;
    }
}

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'Triangle';
}

Triangle.prototype = Shape;

Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function () {
    console.log('Get Perimeter');
    return this.a + this.b + this.c;

}

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(Shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());