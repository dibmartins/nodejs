var express    = require('express');
var Sequelize  = require('sequelize');
const dbConfig = require("./config/db.config.js");

var port = 3000;

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host             : dbConfig.HOST,
    dialect          : dbConfig.dialect,
    operatorsAliases : '0',

    pool: {
        max     : dbConfig.pool.max,
        min     : dbConfig.pool.min,
        acquire : dbConfig.pool.acquire,
        idle    : dbConfig.pool.idle
    }
});

const getUF = async function (){

    users = await sequelize.query("SELECT * FROM uf", { type: sequelize.QueryTypes.SELECT});

    return users;
}

var app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    res.json([
        {name: 'Antônio' , age: 6},
        {name: 'Diego'   , age: 38},
        {name: 'Mariana' , age: 34},
    ]);

});

app.get('/uf', async (req, res) => {

    const estados = await getUF();

    res.json(estados);

});

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
});