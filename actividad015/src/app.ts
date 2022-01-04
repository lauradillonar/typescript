// Tipo Alias

type Numero = number

let n: Numero = 5

type LoginCredentials = {
    username:string,
    password:string,
}

function login(data: LoginCredentials){

}

login({
    username: "admin",
    password: "admin",
})

//Tipos literales

let verdadera: true = true
let cinco: 5 = 5
let hola: "hola" = "hola"

const permiso= true
const saludo = "hola"

type LoginOperation = {
    op: "login",
    username: string,
    password: string,
}

let l: LoginOperation = {
    username: "admin",
    password: "admin",
    op: "login"
}


