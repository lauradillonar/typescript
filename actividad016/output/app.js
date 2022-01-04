"use strict";
let valor = { tres: false };
/* Unión de tipos como parámetro de función */
function convertir(valor) {
    if (typeof (valor) === "string") {
        valor.trim();
    }
    else if (typeof (valor) === "number") {
        valor.toExponential();
    }
}
convertir("cadena");
convertir(5);
function operar(o) {
    if (o.tipo == "suma") {
        return o.sumando1 + o.sumando2;
    }
    else if (o.tipo == "multiplicar") {
        return o.operando1 * o.operando2;
    }
}
let obj = {
    posicion: [5, 5],
    velocidad: [4, 4],
    aceleracion: [1, 1],
};
