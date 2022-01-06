"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarTotal = void 0;
function computarStock(a) {
}
function sumarTotal(productos) {
    computarStock({});
    let precio = 0;
    for (let producto of productos) {
        precio += producto.precio;
    }
    return precio;
}
exports.sumarTotal = sumarTotal;
