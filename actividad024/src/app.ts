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

enum DiaSemana{
    Lunes = "lunes", 
    Martes = "martes",
    Miercoles = "miercoles",
    Jueves = "jueves",
    Viernes = "viernes",
    Sabado = "sabado",
    Domingo = "domingo",
}

interface CitaMedica {
    dia: DiaSemana
}

let c: CitaMedica = {
    dia: DiaSemana.Lunes
}

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

function random(){
    return 9;
}

enum Permisos {
    EscribirMensajes = random(),
    Reaccionar = EscribirMensajes * 2,
    EnviarEnlaces = Reaccionar * 2,
    ConectarseACanalesDeVoz = EnviarEnlaces * 2,
}
