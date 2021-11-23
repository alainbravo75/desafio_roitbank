const mongoose = require('mongoose');

const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Logradura:{
        type: String,
        required: true
    },
    CEP: {
        type: string,
        required: true
    },
    Cidade: {
        type: string,
        required: true
    },
    UF: {
        type: string,
        required: true
    },
    IBGE: {
        type: string,
        required: true
    },
    Referencia:{
        type: string,
        required: false
    }
});

module.exports = mongoose.models('Local', Schema)