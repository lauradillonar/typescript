class Forma{
    nombre:string="";
    Dibujar()
    {
        console.log("Implementación método Dibujar clase base");
    }
}

class Rectangulo extends Forma
{
    base:number=0;
    altura:number=0;
    Dibujar(): void {
        console.log("Implementación método Dibujar clase hija Rectángulo");
    }
}

class Circulo extends Forma
{
    radio:number=0;
    Dibujar(): void {
        console.log("Implementación método Dibujar clase hija Circulo");
    }
}

let rectangulo=new Rectangulo();
rectangulo.Dibujar();

let circulo=new Circulo();
circulo.Dibujar();