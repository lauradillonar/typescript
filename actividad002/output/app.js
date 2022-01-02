"use strict";
class Operacion {
    constructor() {
        this._valorA = 0;
        this._valorB = 0;
        this._resultado = 0;
    }
    set valorA(value) {
        this._valorA = value;
    }
    set valorB(value) {
        this._valorB = value;
    }
    get resultado() {
        return this._resultado;
    }
}
class Suma extends Operacion {
    sumar() {
        this._resultado = this._valorA + this._valorB;
    }
}
class Resta extends Operacion {
    restar() {
        this._resultado = this._valorA - this._valorB;
    }
}
let suma1 = new Suma();
suma1.valorA = 15;
suma1.valorB = 25;
suma1.sumar();
console.log("El resultado de la suma es: " + suma1.resultado);
let resta1 = new Resta();
resta1.valorA = 45;
resta1.valorB = 10;
resta1.restar();
console.log("El resultado de la resta es: " + resta1.resultado);
