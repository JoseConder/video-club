const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');



// Schema 
const directorSchema = new mongoose.Schema({
    _name: String,
    _lastName: String,
});

// Clase 

class Director {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }

    get name() {
        return this._name;
    }

    get lastName() {
        return this._lastName;
    }

    set name(name) {
        this._name = name;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
}

directorSchema.loadClass(Director);
directorSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Director', directorSchema);