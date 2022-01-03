interface a{
    b: number;
}

interface b extends a{
    c:string;
}

class test implements b {
    b: number;
    c: string;
    constructor(b:number,c:string){
        this.b = b;
        this.c = c;
    }
}

/*
interface IPersona {
    nombre: string;
    edad: number;
    direccion:{
        calle:string;
        pais:string;
        ciudad:string;
    },
    mostrarDireccion:()=>string;
}
*/
interface IPersona {
    nombre:string;
    edad: number;
    direccion: IDireccion,
    mostrarDireccion:()=>string;
}

interface IDireccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const persona: IPersona = {
    nombre: "Jose",
    edad: 30,
    direccion:{
        calle: "San Martín",
        pais: "Argentina",
        ciudad: "Córdoba"
    },

    mostrarDireccion(){
        return this.nombre+", "+this.direccion.ciudad+", "+this.direccion.pais;
    }
}

console.log(persona.mostrarDireccion());