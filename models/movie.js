const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    _title: String,
    _director: {
        type: mongoose.Schema.ObjectId,
        ref: 'Director',
    },
    _genre: {
        type: mongoose.Schema.ObjectId,
        ref: 'Genre'
    },
    _actors: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Actor'
        }
    ]
});

class Movie {
    constructor(title, director) {
        this._title = title;
        this._director = director;
        this._genre = genre;
        this._actors = actors;
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

    get genre() {
        return this._genre;
    }

    set genre(v) {
        this._genre = v;
    }

    get actors() {
        return this._actors;
    }

    set actors(v) {
        this._actors = v;
    }
}

Schema.loadClass(Movie);
module.exports = mongoose.model('Movie', Schema);