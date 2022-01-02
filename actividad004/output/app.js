"use strict";
class Forma {
    constructor() {
        this.nombre = "";
    }
    Dibujar() {
        console.log("Implementación método Dibujar clase base");
    }
}
class Rectangulo extends Forma {
    constructor() {
        super(...arguments);
        this.base = 0;
        this.altura = 0;
    }
    Dibujar() {
        console.log("Implementación método Dibujar clase hija Rectángulo");
    }
}
class Circulo extends Forma {
    constructor() {
        super(...arguments);
        this.radio = 0;
    }
    Dibujar() {
        console.log("Implementación método Dibujar clase hija Circulo");
    }
}
let rectangulo = new Rectangulo();
rectangulo.Dibujar();
let circulo = new Circulo();
circulo.Dibujar();
