/* boolean */
let logico: boolean = false;
let verdadero: boolean = true;

/* number */ 
let entero: number = 44
let decimal: number = 26.05
let hexadecimales: number = 0xcbcbaa
let binario: number = 0b1001010101
let extremadamenteLargo: number = 7_812_341_121

/* string */
let cadenas: string = "sdfjsdkf"

/* any */
let cualquiera: any
cualquiera = "una cadena"
cualquiera = false

/* null */
let nada:null = null

/* undefined */
let indefinido:undefined = undefined

/* void */
function saludar(): void {
    console.log("hola")
}
let x = saludar();

/* Tipos no Primitivos */

//arrays

[1,2,3,4,5];

let dias: string[] = ["lunes","martes","miercoles","jueves","viernes"]
console.log(dias[2]);

// tuples
let db: [string, number, string, boolean] = ["Dani",26,"España",true];

let db1: let db: [nombre:string, edad:number, pais:string, premium:boolean] = ["Dani",26,"España",true];

// Objetos

let persona: {
    nombre:string,
    edad: number,
    pais: string,
    fecha_nac: Date,
    mascota: boolean
    laboral: {
        empresa: string,
        sector: string,
    }
} = {
    nombre: "Pepe Perez",
    edad: 30,
    pais: "Colombia",
    fecha_nac: new Date(1990,5,14),
    mascota: true
    laboral: {
        empresa: "Empresa",
        sector: "Informática"
    }
}

