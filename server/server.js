const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const routes = require('./routes/routes');

const DB = require('./connection/connection');
DB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow the specified methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allow the specified headers
    next();
})

app.use('/booking',routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})