// array, objets

let vector: number[] = []
vector[0]

type Account = {
    displayName: string,
    rpDisplayName: string,
    id: string
}

let object: Account = {
    displayName: "foo",
    rpDisplayName: "foo",
    id: "1"
}
let x = object["displayName"]

// Interfaces indizadas

interface Indizable {
    [index: number]: boolean
}

let l:Indizable ={}
let k = l[4]

/*
interface Indizable {
    [index: string]: string
}

let l:Indizable ={}
let k = l["4"]

*/

