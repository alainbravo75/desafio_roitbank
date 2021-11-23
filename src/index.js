const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

mongoose.connect('process.env.MONGO_URI', {
    useUnifiedTopology: true,
    useNewUrlParseR: true
}, console.log('banco de dados conectado'));

app.use(express.json());
app.use(cors());
app.use(routes);





app.listen(8086, () => console.log('Servidor rodando na porta 8086'));