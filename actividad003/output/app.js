"use strict";
class Turbina {
    constructor(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    ToString() {
        return this.numTurbinas + " Turbinas";
    }
}
class Cubierta {
    constructor(pCabinaTripulacion, pCabinaVuelo, pSistemaEmergencia, pTanquesCombustible, pPuertasSalida) {
        this.cabinaTripulacion = false;
        this.cabinaVuelo = false;
        this.sistemaEmergencia = false;
        this.numTanquesCombustible = 0;
        this.numPuertasSalidas = 0;
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }
    ToString() {
        let mensaje = " Cubierta compuesta de: ";
        if (this.cabinaVuelo)
            mensaje += " Cubierta de vuelo, ";
        if (this.cabinaTripulacion)
            mensaje += " Cubierta de tripulación, ";
        if (this.sistemaEmergencia)
            mensaje += " Sistema de emergencia, ";
        mensaje += this.numTanquesCombustible + " Tanques de combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de salida.";
        return mensaje;
    }
}
class Helice {
    constructor(n) {
        this.numHelices = 0;
        this.numHelices = n;
    }
    ToString() {
        return this.numHelices + " Hélices, ";
    }
}
class TrenDeAterrizaje {
    constructor(pRetractilFijo, pNeumaticos, pAmortiguadores) {
        this.retractilFijo = false;
        this.numNeumaticos = 0;
        this.numAmortiguadores = 0;
        this.retractilFijo = pRetractilFijo;
        this.numNeumaticos = pNeumaticos;
        this.numAmortiguadores = pAmortiguadores;
    }
    ToString() {
        let mensaje = " Tren de Aterrizaje compuesto por: ";
        if (this.retractilFijo)
            mensaje += " Retractil fijo, ";
        mensaje += this.numNeumaticos + " Numáticos, ";
        mensaje += this.numAmortiguadores + " Amortiguadores, ";
        return mensaje;
    }
}
class Alas {
    constructor(pAlasFrontales, pAlasPosteriores) {
        this.numAlasFrontales = 0;
        this.numAlasPosteriores = 0;
        this.numAlasFrontales = pAlasFrontales;
        this.numAlasPosteriores = pAlasPosteriores;
    }
    ToString() {
        let mensaje = "";
        mensaje += this.numAlasFrontales + " Alas frontales, ";
        mensaje += this.numAlasPosteriores + " Alas posteriores, ";
        return mensaje;
    }
}
class Aeroplano {
    constructor(phelice, pTrenAterrizaje, pAlas, pCubierta) {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    ToString() {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}
let _helice = new Helice(1);
let _trenAterrizaje = new TrenDeAterrizaje(true, 2, 2);
let _alas = new Alas(2, 2);
let _cubierta = new Cubierta(true, true, true, 1, 2);
let _aeroplano = new Aeroplano(_helice, _trenAterrizaje, _alas, _cubierta);
console.log(_aeroplano.ToString());
