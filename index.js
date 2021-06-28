var express = require('express');

var port = 3000;

var app = express();

app.get('/', (req, res) => {
    res.json([
        {name: 'Antônio' , age: 6},
        {name: 'Diego'   , age: 38},
        {name: 'Mariana' , age: 34},
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});