"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
function createServer() {
    //Creamos el servidor
    const app = (0, express_1.default)();
    app.get("/resultados/:equipo1/:equipo2", (req, res) => {
        try {
            let team1 = (0, database_1.getClub)(req.params.equipo1);
            let team2 = (0, database_1.getClub)(req.params.equipo2);
            let match = (0, database_1.getResultado)(team1, team2);
            if (match.score) {
                res.json({
                    date: match.date,
                    result: `${team1} ${match.score.ft[0]} - ${match.score.ft[1]} ${team2}`
                });
            }
            else {
                res.json({
                    date: match.date,
                });
            }
        }
        catch (e) {
            res.status(400).json({
                error: e.message
            });
        }
    });
    return app;
}
exports.default = createServer;
