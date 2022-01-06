import {tokenToDate} from "datetoken"
import isOdd from "is-odd"

// moment, date-fns
// npm i datetoken

let d = new Date()
let date = tokenToDate("Thu 24 Jun",d)


