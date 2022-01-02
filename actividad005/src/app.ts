abstract class Operacion{
    protected valorA:number=0;
    protected valorB:number=0;
    protected resultado:number=0;
    abstract Operar():void;

    set ValorA(value:number){
        this.valorA=value;
        console.log(this.valorA);
    }
    set ValorB(value:number){
        this.valorB=value;
        console.log(this.valorB);
    }
    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion
{
    Operar(): void {
        this.resultado=this.valorA+this.valorB;
    }
}

class Resta extends Operacion
{
    Operar(): void {
        this.resultado=this.valorA-this.valorB;
    }
}

let suma = new Suma();
suma.ValorA=10;
suma.ValorB=15;
suma.Operar();
console.log("El resultado de la suma es "+suma.Resultado);

let resta = new Resta();
resta.ValorA=40;
resta.ValorB=5;
resta.Operar();
console.log("El resultado de la resta es "+resta.Resultado);