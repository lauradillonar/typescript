export type Producto = {
    sku: string,
    nombre: string,
    descripcion: string,
    precio: number,
    urlFoto: string,
    valoraciones: number,
}

type Almacen = {
    [sku: string]:{
        stock: number
        ultimaEntrega: Date,
    }
}

function computarStock(a: Almacen){

}

export function sumarTotal(productos: Producto[]){
    computarStock({})
    let precio = 0;
    for (let producto of productos) {
        precio += producto.precio
    }
    return precio 
}