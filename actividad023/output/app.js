"use strict";
function esUnaGeometria(x) {
    return x.lados && x.pintar;
}
/*
function esUnCuadrado(x:any): x is Cuadrado {
    return x.lados && x.lados == 4 && x.pintar && x.lado
}
*/
function esUnCuadrado(x) {
    return esUnaGeometria(x) && x.lado;
}
function esUnTriangulo(x) {
    return esUnaGeometria(x) && x.base && x.altura;
}
function procesar(g) {
    if (esUnCuadrado(g)) {
        g.lado;
    }
    else if (esUnTriangulo(g)) {
        g.base;
    }
}
/*
function procesar(g: Geometria){
    if(g.lados == 4){
        let cuadrado = g as Cuadrado
        cuadrado.lado
    } else if(g.lados == 3){
        let triangulo = g as Triangulo
        triangulo.altura
    }
}
*/ 
