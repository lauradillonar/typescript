"use strict";
/*
enum DiaSemana{
    Lunes = 401,
    Martes,
    Miercoles,
    Jueves =701,
    Viernes,
    Sabado,
    Domingo,
}
*/
var DiaSemana;
(function (DiaSemana) {
    DiaSemana["Lunes"] = "lunes";
    DiaSemana["Martes"] = "martes";
    DiaSemana["Miercoles"] = "miercoles";
    DiaSemana["Jueves"] = "jueves";
    DiaSemana["Viernes"] = "viernes";
    DiaSemana["Sabado"] = "sabado";
    DiaSemana["Domingo"] = "domingo";
})(DiaSemana || (DiaSemana = {}));
let c = {
    dia: DiaSemana.Lunes
};
// Enumerados con valores computados
/*
enum Permisos {
    EscribirMensajes = 1,
    Reaccionar = 2,
    EnviarEnlaces = 4,
    ConectarseACanalesDeVoz = 8,
}
*/
/*
const INICIAL = 8
enum Permisos {
    EscribirMensajes = INICIAL,
    Reaccionar = EscribirMensajes * 2,
    EnviarEnlaces = Reaccionar * 2,
    ConectarseACanalesDeVoz = EnviarEnlaces * 2,
}
*/
function random() {
    return 9;
}
var Permisos;
(function (Permisos) {
    Permisos[Permisos["EscribirMensajes"] = random()] = "EscribirMensajes";
    Permisos[Permisos["Reaccionar"] = Permisos.EscribirMensajes * 2] = "Reaccionar";
    Permisos[Permisos["EnviarEnlaces"] = Permisos.Reaccionar * 2] = "EnviarEnlaces";
    Permisos[Permisos["ConectarseACanalesDeVoz"] = Permisos.EnviarEnlaces * 2] = "ConectarseACanalesDeVoz";
})(Permisos || (Permisos = {}));
