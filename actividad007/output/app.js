"use strict";
class test {
    constructor(b, c) {
        this.b = b;
        this.c = c;
    }
}
const persona = {
    nombre: "Jose",
    edad: 30,
    direccion: {
        calle: "San Martín",
        pais: "Argentina",
        ciudad: "Córdoba"
    },
    mostrarDireccion() {
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
};
console.log(persona.mostrarDireccion());
