class Turbina
{
    private numTurbinas:number = 0;
    public constructor(n:number)
    {
        this.numTurbinas = n;
    }
    public ToString()
    {
        return this.numTurbinas + " Turbinas";
    }
}

class Cubierta
{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean =false;
    private sistemaEmergencia:boolean=false;
    private numTanquesCombustible:number=0;
    private numPuertasSalidas:number=0;

    public constructor(pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number)
    {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString()
    {
        let mensaje = " Cubierta compuesta de: ";
        if(this.cabinaVuelo)
            mensaje += " Cubierta de vuelo, ";
        if(this.cabinaTripulacion)
            mensaje += " Cubierta de tripulación, ";
        if(this.sistemaEmergencia)
            mensaje += " Sistema de emergencia, ";
        
        mensaje += this.numTanquesCombustible + " Tanques de combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de salida.";
        return mensaje;
    }
}

class Helice
{
    private numHelices: number = 0;
    public constructor(n:number)
    {
        this.numHelices = n;
    }
    public ToString()
    {
        return this.numHelices + " Hélices, ";
    }
}

class TrenDeAterrizaje
{
    private retractilFijo:boolean=false;
    private numNeumaticos:number=0;
    private numAmortiguadores:number=0;

    public constructor(pRetractilFijo:boolean, pNeumaticos: number, pAmortiguadores: number)
    {
        this.retractilFijo = pRetractilFijo;
        this.numNeumaticos = pNeumaticos;
        this.numAmortiguadores = pAmortiguadores;
    }

    public ToString()
    {
        let mensaje = " Tren de Aterrizaje compuesto por: ";
        if(this.retractilFijo)
            mensaje += " Retractil fijo, ";
        mensaje += this.numNeumaticos + " Numáticos, ";
        mensaje += this.numAmortiguadores + " Amortiguadores, ";
        return mensaje;
    }
}

class Alas
{
    private numAlasFrontales: number = 0;
    private numAlasPosteriores: number = 0;
    
    public constructor(pAlasFrontales: number, pAlasPosteriores: number)
    {
        this.numAlasFrontales = pAlasFrontales;
        this.numAlasPosteriores = pAlasPosteriores;
    }

    public ToString()
    {
        let mensaje: String = "";
        
        mensaje += this.numAlasFrontales + " Alas frontales, ";
        mensaje += this.numAlasPosteriores + " Alas posteriores, ";
        return mensaje; 
    }

}

class Aeroplano
{
    private helice: Helice;
    private trenAterrizaje: TrenDeAterrizaje;
    private alas:Alas;
    private cubierta: Cubierta;
    
    constructor(phelice: Helice, pTrenAterrizaje:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta)
    {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }

    public ToString()
    {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}

let _helice: Helice = new Helice(1);
let _trenAterrizaje: TrenDeAterrizaje = new TrenDeAterrizaje (true,2,2);
let _alas: Alas = new Alas(2,2);
let _cubierta: Cubierta = new Cubierta(true,true,true,1,2);
let _aeroplano: Aeroplano = new Aeroplano(_helice,_trenAterrizaje,_alas,_cubierta);

console.log(_aeroplano.ToString());
