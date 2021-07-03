require('dotenv').config();

var express = require('express');
var db      = require('./db');
var events  = require('events');

var emitter = new events.EventEmitter();

emitter.on('OnLoadUF', (data) => {
    console.log(data);
});

const getUF = async function (){

    users = await db.query("SELECT * FROM uf", { type: db.QueryTypes.SELECT});

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
    
    emitter.emit('OnLoadUF', estados);
});

app.listen(process.env.NODE_PORT, () => {
    console.log(`${process.env.NODE_ENV} server running at http://localhost:${process.env.NODE_PORT}`)
});