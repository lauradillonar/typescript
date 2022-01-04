abstract class Vehiculo { 
    fabricante: string
    constructor(fabricante: string){
        this.fabricante = fabricante
    }
    moverse(){
        console.log(`El vehículo ${this.fabricante} se ha movido mágicamente`)
    }
    protected llevarAlTaller(){
        console.log("Al taller que va")
    }
}

class VehiculoTerrestre extends Vehiculo{
    private tipo: string
    constructor(fabricante: string, tipo: string){
        super(fabricante)
        this.tipo = tipo
    }
    moverse(): void {
        console.log(`bruum bruum hace mi ${this.tipo}`)
        super.moverse()
    }
    reparar(){
        console.log(`Un momento que me leo el manual de ${this.fabricante}`)
    }
}

class VehiculoAereo extends Vehiculo{
    moverse(): void {
        console.log("niauuuun")
        super.moverse()
    }
    reparar(){
        this.llevarAlTaller()
    }
}

class VehiculoMaritimo extends Vehiculo{
    moverse(){
        console.log("el ruido del mar")
        super.moverse()
    }
}

let vehiculo = new VehiculoTerrestre("Yamaha","moto")
vehiculo.reparar()

/*
let vehiculo: Vehiculo = new VehiculoTerrestre("Yamaha","moto")
*/