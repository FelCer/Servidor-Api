const API_BASE = "/api"
const db = require("../db");
var bodyParser = require('body-parser');
var mssql = require('mssql');
var http = require('http');
var path = require('path');
module.exports = function (app) {

    app.use(bodyParser.urlencoded({
        extended: false
    })),
        app.use(bodyParser.json()),
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        }),
        app.get(`${API_BASE}/usuarios`, (req, res, next) => {
            var request = new mssql.Request();
            request.query('SELECT * FROM usuarios', function (err, result) {
                if (err)
                    return next(err);

                var data = {};
                data = result.recordset;
                res.send(data);
            })
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
            var request = new mssql.Request();
            request.query('select top 100 * from parque ', function (err, result) {
                if (err)
                    return next(err);

                var dataParque = {};
                dataParque = result.recordset;
                res.send(dataParque);
            })
            /*const query = db.getParques();
            res.json(query);*/
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