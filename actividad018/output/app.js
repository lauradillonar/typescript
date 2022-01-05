"use strict";
function process(s) {
    //do something
    console.log(`area: ${s.area()}`);
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sides = 4;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
let r = new Rectangle(5, 5);
process(r);
