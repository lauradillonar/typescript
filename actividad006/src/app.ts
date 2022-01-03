interface IOperacion{
    Operar(a:number,b:number):number;
}

class Suma implements IOperacion{
    Operar(a: number, b: number): number {
        return a+b;
    }
}

class Resta implements IOperacion{
    Operar(a: number, b: number): number {
        return a-b;
    }
}

let suma = new Suma;
console.log("El resultado de la suma es "+suma.Operar(10,15));

let resta = new Resta;
console.log("El resultado de la resta es "+suma.Operar(10,5));