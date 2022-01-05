/*
type Comparator = {
    (a:string, b:string):number
    algorithm: string
}
*/

interface Comparator {
    (first: string, second: string):number
    algorithm: string
    safe: boolean
}

function sort(c: Comparator){
    let out = c("first","second")
    console.log(`Ordenando con el criterio ${c.algorithm}: ${out}`)
}