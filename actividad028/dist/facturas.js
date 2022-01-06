"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datetoken_1 = require("datetoken");
// moment, date-fns
// npm i datetoken
let d = new Date();
let date = (0, datetoken_1.tokenToDate)("Thu 24 Jun", d);
