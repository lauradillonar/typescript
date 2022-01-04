"use strict";
function sumar(m, n) {
    let suma = m + n;
    console.log(`${m}+${n}=${suma}`);
    return suma;
}
let x = sumar(3, 4);
let restar = function (m, n) {
    let resta = m - n;
    console.log(`${m} - ${n} = ${resta}`);
    return resta;
};
restar(5, 4);
let multiplicar1;
/*
multiplicar = function(m,n){
    return m*n;
}
*/
multiplicar1 = (m, n) => m * n;
console.log(multiplicar1(4, 3));
// multiplicar (A, B, function(result){
//    console.log(A*B es result)   
//})
let multiplicar;
multiplicar = (a, b, callback) => callback(a * b);
multiplicar(4, 5, function (result) {
    console.log(`Resultado: ${result}`);
});
