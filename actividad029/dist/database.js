"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResultado = exports.getClub = void 0;
const clubs = require("../data/clubs.json");
const resultados = require("../data/resultados.json");
function getClub(code) {
    const club = clubs.clubs.find(club => club.code === code);
    if (!club) {
        throw new Error("No existe este equipo");
    }
    return club.name;
}
exports.getClub = getClub;
function getResultado(eq1, eq2) {
    const match = resultados.matches.find(match => {
        return eq1 === match.team1 && eq2 === match.team2;
    });
    if (!match) {
        throw new Error("No existe este partido este año");
    }
    return match;
}
exports.getResultado = getResultado;
