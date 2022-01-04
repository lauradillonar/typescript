class Rectangulo {
    private readonly ancho: number
    private readonly alto: number

    constructor(ancho:number, alto:number){
        console.log("constructor()")
        this.ancho = ancho
        this.alto = alto
    }

    area(){
        console.log("area()")
        return this.ancho * this.alto
    }

    perimetro(){
        return this.ancho * 2 + this.alto * 2
    }
}

let r1 = new Rectangulo(10,15)
let r2 = new Rectangulo(4,3)

console.log(r1.area())
console.log(r2.area())