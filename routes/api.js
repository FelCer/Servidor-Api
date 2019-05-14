const API_BASE = "/api"
const db = require("../db");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }),
        app.get(`${API_BASE}/ambientes`, (req, res) => {
            const query = db.getAmbientes();
            res.json(query);
        }),
        app.get(`${API_BASE}/escalas`, (req, res) => {
            const query = db.getEscalas();
            res.json(query);
        }),
        app.get(`${API_BASE}/parques`, (req, res) => {
            const query = db.getParques();
            res.json(query);
        }),
        app.get(`${API_BASE}/user/:id`, (req, res) => {
            const query = db.getUserById(req.params.id);
            res.json(query);
            console.log(query);
            console.log("navegando 2");
        })
    app.post('/api/datos', (req, res, next) => {
        let rta = req.body;
        console.log("llega" + rta);
        res.send("Okey peticion exitosa." + rta);
    })
};