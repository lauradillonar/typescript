"use strict";
class Vehiculo {
    constructor(fabricante) {
        this.fabricante = fabricante;
    }
    moverse() {
        console.log(`El vehículo ${this.fabricante} se ha movido mágicamente`);
    }
}
class VehiculoTerrestre extends Vehiculo {
    constructor(fabricante, tipo) {
        super(fabricante);
        this.tipo = tipo;
    }
    moverse() {
        console.log(`bruum bruum hace mi ${this.tipo}`);
        super.moverse();
    }
}
class VehiculoAereo extends Vehiculo {
    moverse() {
        console.log("niauuuun");
        super.moverse();
    }
}
class VehiculoMaritimo extends Vehiculo {
    moverse() {
        console.log("el ruido del mar");
        super.moverse();
    }
}
let vehiculo = new VehiculoAereo("Airbus");
vehiculo.moverse();
let vehiculoT = new VehiculoTerrestre("Yamaha", "moto");
vehiculoT.moverse();
