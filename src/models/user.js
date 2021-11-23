const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Nome:{
        type: String,
        required: true
    },
    Idade: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.models('User', Schema)