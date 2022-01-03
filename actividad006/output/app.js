"use strict";
class Suma {
    Operar(a, b) {
        return a + b;
    }
}
class Resta {
    Operar(a, b) {
        return a - b;
    }
}
let suma = new Suma;
console.log("El resultado de la suma es " + suma.Operar(10, 15));
let resta = new Resta;
console.log("El resultado de la resta es " + suma.Operar(10, 5));
