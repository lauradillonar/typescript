// Uniones de tipos
type A = {
    uno: boolean;
    dos: boolean;
}

type B = {
    tres: boolean;
}

let valor: A | B = {tres: false}

/* Unión de tipos como parámetro de función */
function convertir(valor: string | number){
    if(typeof(valor) === "string"){
        valor.trim()
    }else if (typeof(valor) === "number"){
        valor.toExponential()
    }
}

convertir("cadena")
convertir(5)

/* Uniones discriminantes */

type OperacionSuma = {
    sumando1:number,
    sumando2:number,
    tipo: "suma"
}

type OperacionMultiplicar = {
    operando1: number,
    operando2: number,
    tipo: "multiplicar"
}

type Operacion = OperacionSuma | OperacionMultiplicar

function operar(o: Operacion) {
    if(o.tipo == "suma"){
        return o.sumando1 + o.sumando2
    } else if (o.tipo == "multiplicar"){
        return o.operando1 * o.operando2
    }
}

/* Intersecciones de tipos */

type Coordenada = [x: number, y: number]
type Vector = [x: number, y: number]

type Posicionable = {
    posicion: Coordenada
}

type Movible = {
    velocidad: Vector
    aceleracion: Vector
}

type MovibleYPosicionable = Posicionable & Movible

let obj:  MovibleYPosicionable = {
    posicion: [5, 5],
    velocidad: [4, 4],
    aceleracion: [1, 1],
}

