 
class Operacion{
    protected _valorA:number;
    protected _valorB:number;
    protected _resultado:number;
    constructor() {
        this._valorA=0;
        this._valorB=0;
        this._resultado=0;
    }

    set valorA(value:number){
        this._valorA= value;
    }
    set valorB(value:number){
        this._valorB=value;
    }

    get resultado():number{
        return this._resultado;
    }
}

class Suma extends Operacion{
    sumar(){
        this._resultado= this._valorA+this._valorB;
    }
}

class Resta extends Operacion{
    restar(){
        this._resultado= this._valorA-this._valorB;
    }
}

let suma1: Suma= new Suma();
suma1.valorA=15;
suma1.valorB=25;
suma1.sumar();
console.log("El resultado de la suma es: " +suma1.resultado);

let resta1: Resta= new Resta();
resta1.valorA=45;
resta1.valorB=10;
resta1.restar();
console.log("El resultado de la resta es: "+resta1.resultado);