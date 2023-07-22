const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
    index: {
        type: Number,
        required: true
    },
    row: {
        type: Number,
        required: true
    },
    column: {
        type: Number,
        required: true
    },
    alive: {
        type: Boolean,
        required: true
    }
})

const Model = mongoose.model("Model", ModelSchema);

module.exports = Model;