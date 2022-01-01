function DecoradorPersona(data:string){
    return function <T extends {new(...args:any[]):{} }>(constructor: T){
        return class extends constructor {
            array = data.split(",");
            Nombre = this.array[0];
            Apellido=this.array[1];
        }
    }
}

@DecoradorPersona('Juan,López')
class Persona {
    private nombre:string="";
    private apellido:string="";
    private añoNac:number=0;

    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    decirNombre() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }
}

let persona1: Persona = new Persona("María","Rodriguez"); 
persona1.decirNombre();

console.log(persona1);
