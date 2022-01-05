interface Vehiculo {
    readonly fabricante: string
    arrancarMotor(): void
    repostar(): void
    detenerMotor(): void
}

/* 
type Vehiculo = {
    readonly fabricante: string
    arrancarMotor(): void
    repostar(): void
    detenerMotor(): void
}

type VehiculoTerrestre = Vehiculo & {
    conducir(): void
}
*/

interface VehiculoTerrestre extends Vehiculo {
    conducir(): void
}

interface VehiculoMaritimo extends Vehiculo {
    sonarSirena(): void
    encenderChimenea(): void
    detenerChimenea(): void
}

class OpelCorsa implements VehiculoTerrestre {
    fabricante: string = "Opel"

    conducir(): void {
        console.log("brum brum")
    }

    arrancarMotor(): void {
        console.log("turururururururur")
    }

    repostar(): void {
        console.log("Echando 20 pesos de gasolina")
    }

    detenerMotor(): void {
        console.log("turururu...........")
    }

    abrirMaletero():void{

    }
}

function procesar(v: Vehiculo){
    v.arrancarMotor()
}

procesar(new OpelCorsa())