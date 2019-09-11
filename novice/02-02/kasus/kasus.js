class cat {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.eat = 0;
    }

    cateat() {
        this.eat++;
        console.log(this.name, this.type, this.color, 'eat');
        return this;

    }

    fatigue() {
        this.fatigue;
        console.log(this.name, this.type, this.color, 'fatigue');
        return this;

    }

    sleep() {
        this.sleep;
        console.log(this.name, this.type, this.color, 'sleep');
        return this;

    }
}
var cat1 = new cat('bony', 'persia', 'brown');
var cat2 = new cat('bona', 'persia', 'black');

cat1.cateat().cateat().fatigue().sleep();