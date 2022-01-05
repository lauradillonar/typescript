interface Geometria {
    lados: number
    pintar():void
}

interface Triangulo extends Geometria {
    base: number
    altura: number
}

interface Cuadrado extends Geometria {
    lado: number
}

function esUnaGeometria(x: any): x is Geometria {
    return x.lados && x.pintar
}
/*
function esUnCuadrado(x:any): x is Cuadrado {
    return x.lados && x.lados == 4 && x.pintar && x.lado
}
*/

function esUnCuadrado(x:any): x is Cuadrado{
    return esUnaGeometria(x)&&(x as any).lado
}

function esUnTriangulo(x:any):x is Triangulo {
    return esUnaGeometria(x)&&(x as any).base && (x as any).altura
}

function procesar(g: Geometria){
    if(esUnCuadrado(g)){
        g.lado
    } else if(esUnTriangulo(g)){
        g.base 
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