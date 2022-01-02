"use strict";
class Operacion {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value) {
        this.valorA = value;
        console.log(this.valorA);
    }
    set ValorB(value) {
        this.valorB = value;
        console.log(this.valorB);
    }
    get Resultado() {
        return this.resultado;
    }
}
class Suma extends Operacion {
    Operar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operacion {
    Operar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let suma = new Suma();
suma.ValorA = 10;
suma.ValorB = 15;
suma.Operar();
console.log("El resultado de la suma es " + suma.Resultado);
let resta = new Resta();
resta.ValorA = 40;
resta.ValorB = 5;
resta.Operar();
console.log("El resultado de la resta es " + resta.Resultado);
