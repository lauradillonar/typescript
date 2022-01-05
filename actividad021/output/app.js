"use strict";
/*
type Comparator = {
    (a:string, b:string):number
    algorithm: string
}
*/
function sort(c) {
    let out = c("first", "second");
    console.log(`Ordenando con el criterio ${c.algorithm}: ${out}`);
}
