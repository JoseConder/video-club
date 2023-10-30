const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    _title: String,
    _director: {
        type: mongoose.Schema.objectId,
        ref: 'Director',
    },
});

class Movie {
    constructor(title, director) {
        this._title = title;
        this._director = director;
    }

    get title() {
        return this._title;
    }

    set title(v) {
        this._title = v;
    }

    get director() {
        return this._director;
    }

    set director(v) {
        this._director = v;
    }
}

Schema.loadclass(Movie);
module.exports = mongoose.model('Movie', Schema);