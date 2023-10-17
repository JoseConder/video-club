const express = require('express');
const {Movie, Actor} = require('../db');

//la jerarquia importa
function create(req, res, next) {    
    const title = req.body.title;
    const genreId = req.body.genreId;
    const directorId = req.body.directorId;

    Movie.create({
        title: title,
        genreId: genreId,
        directorId: directorId
    }).then(object => res.json(object)).catch(err => res.send(err));
}

function list(req, res, next) {
    Movie.findAll({inclued: ['genre', 'director']}).then(objects => res.json(objects)).catch(err => res.send(err));
}

function index(req, res, next) {    
    res.send('movies index');
}

function replace(req, res, next) {    
    res.send('Users replace');
}

function update(req, res, next) {
    res.send('Users update');
}

function destroy(req, res, next) {
    res.send('Users destroy');
}

function addActor(req, res, next){
    const idMovie = req.body.idMovie;
    const idActor= req.body.idActor;

    Movie.findByPk(idMovie).then(movie =>{
        Actor.findByPk(idActor).then(actor =>{
            movie.addActor(actor);
            res.json(movie);
        }).catch(err => res.send(err));
    }).catch(err => res.send(err));
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy,
    addActor
};

