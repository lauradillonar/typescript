"use strict";
function multiplicar(uno, dos) {
    return uno * dos;
}
multiplicar(5, 5);
multiplicar(3, 2);
let payload = {
    type: "post",
    success: true,
    message: "sdfsdf",
};
let payload2 = {
    type: "error",
    success: false,
    message: true
};
function subir(p, e) {
    return p;
}
let post = { id: 0, mensaje: "hola mundo" };
let x = subir(post);
