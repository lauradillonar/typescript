function multiplicar(uno:number,dos:number){
    return uno * dos
}

multiplicar(5,5)
multiplicar(3,2)

/*
interface Respuesta<T> {
    type: string,
    success: boolean,
    message: T,
}

let payload: Respuesta<string> = {
    type: "post",
    success: true,
    message: "sdfsdf"
}

let payload2: Respuesta<boolean> = {
    type: "error",
    success: false,
    message: true
}
*/

interface Respuesta<Mensaje,Extra> {
    type: string,
    success: boolean,
    message: Mensaje,
    whatever?: Extra
}

let payload: Respuesta<string, number> = {
    type: "post",
    success: true,
    message: "sdfsdf",
}

let payload2: Respuesta<boolean, object> = {
    type: "error",
    success: false,
    message: true
}

// ***** Genéricos en funciones

/*
type Nota = { mensaje: string}
type NotaColorida = Nota & { color: string}
type Foto = {url: string}
type Video = Foto & {duracion: number}
*/
// HTTP POST /upload
/*
type Publicacion = Nota | NotaColorida | Foto | Video
function subir(p: Publicacion): Publicacion{
    return p 
}

function subir<Publicacion>(p: Publicacion): Publicacion{
    return p 
}

let post: Nota = { mensaje: "hola mundo"}
//let x = subir<Nota>(post)
let x = subir(post)
*/

// ***** Genéricos con restricciones

// let x = subir(5)

interface Post { 
    id: number
 }

interface Nota extends Post {
    mensaje: string
}

interface NotaColorida extends Nota {
    color: string
}

interface Foto extends Post {
    url: string
}

interface Video extends Foto {
    duracion: number
}

function subir<
    Publicacion extends Post,
    Extra
>(p: Publicacion, e?: Extra): Publicacion{
    return p 
}

let post: Nota = {id: 0, mensaje: "hola mundo"}
let x = subir(post)



