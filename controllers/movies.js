const express = require('express');
const Director = require('../models/director');
const Movie = require('../models/movie');

async function create(req, res, next) {
    const title = req.body.title;
    const directorID = req.body.directorID;

    let director = await Director.findOne({ _id: directorID });
    let movie = new Movie({
        title: title,
        director: director
    });

    movie.save().then(obj => res.status(200).json({
        msg: "Movie created",
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: "Error creating movie",
        obj: ex
    }))
}

function list(req,res,next){
    movie.find().populate('_director').then(objs => res.status(200).json({
        msg:"Movies list",
        obj: objs
    })).catch(ex => res.status(500).json({
        msg:"Error listing movies",
        obj:ex
    }));
}

function index(req,res,next){
    res.send('Users index');
}

function replace(req,res,next){
    res.send('Users replace');
}
function update(req,res,next){
    res.send('Users update');
}

function destroy(req,res,next){
    res.send('Users destroy');
}
