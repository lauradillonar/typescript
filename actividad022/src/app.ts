// particularidad de las interfaces

interface X {
    a:string
}

interface X {
    b:string
}

interface X {
    c:string
}

function use1(x:X){
    x.a + x.b + x.c
}

// Creando variables globales acopladas al objeto window

interface Window {
    accountID: number
}

function use(w:Window){
    w.accountID
}