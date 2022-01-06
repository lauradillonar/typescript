import { Producto} from "./almacen" 
import IVA, {Impuesto, Precio} from "./impuestos"
//import * as impuestos from "./impuestos"

function procesarPedido(p: Producto[]){
    console.log("Procesando...")
}

console.log(`El IVA es ${IVA(10.99)}`)
