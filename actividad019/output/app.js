"use strict";
class OpelCorsa {
    constructor() {
        this.fabricante = "Opel";
    }
    conducir() {
        console.log("brum brum");
    }
    arrancarMotor() {
        console.log("turururururururur");
    }
    repostar() {
        console.log("Echando 20 pesos de gasolina");
    }
    detenerMotor() {
        console.log("turururu...........");
    }
    abrirMaletero() {
    }
}
function procesar(v) {
    v.arrancarMotor();
}
procesar(new OpelCorsa());
