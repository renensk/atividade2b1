var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nome: { type: String, required: true },
    coordenador: { type: String, require: true },
    disciplinas: [
        {
            nome: { type: String, required: false },
            cargahoraria: { type: String, required: false },
            professor: { type: String, required: false }
        }
    ]
});

module.exports = mongoose.model('Curso', schema);