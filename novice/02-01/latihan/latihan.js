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
    return this.a + this.b + this.c;

}

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(Shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

Array.prototype.shuffle = function () {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tempArray.shuffle();


console.log(tempArray);