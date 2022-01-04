"use strict";
class Rectangulo {
    constructor(ancho, alto) {
        this._nombre = "";
        console.log("constructor()");
        this.ancho = ancho;
        this.alto = alto;
    }
    get nombre() {
        console.log("Obtengo el nombre");
        return this._nombre;
    }
    set nombre(value) {
        console.log("Seteo el nombre");
        this._nombre = value;
    }
    get area() {
        console.log("getter de area");
        return this.ancho * this.alto;
    }
    perimetro() {
        return this.ancho * 2 + this.alto * 2;
    }
}
let r1 = new Rectangulo(10, 15);
r1.nombre = "A";
console.log(`El rectángulo ${r1.nombre}`);
