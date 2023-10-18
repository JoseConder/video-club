const express = require('express');
const {Director} = require('../db');

function create(req,res,next){
    const name = req.body.name;
    const lastName = req.body.lastName;
    //recibe un objeto como param dentro con los atributos
    Director.create({
        name: name,
        lastName: lastName
    }).then(object=> res.json(object))
    .catch(err=>res.send(err));
}

// NOTA: siempre debe haber un response aunque no haya sido exitosa la operacion
function list(req,res,next){
    Director.findAll({include:['movies']}).then(object=>res.json(object)).catch(err=>send.json(err));
}

function index(req,res,next){
    const id = req.params.id;   //la funcion flecha va a devolver el objeto, que no es mas que el director en este caso solo que el nombre es mas generico para poder reutilizar codigo en un fituro
    Director.findByPk(id).then(object => res.json(object)).catch(err=>send.json(err));
}

function replace(req,res,next){
    const id = req.params.id;
    Director.findByPk(id).
        then(object=>{
            const name = req.body.name ? req.body.name : "";
            const lastName = req.body.lastName ? req.body.lastName : "";
            object.update({
                name: name,
                lastName: lastName
            }).then(obj => res.json(obj))
                .catch(err=>res.send(err));
        }).catch();
}

function update(req,res,next){
    const id = req.params.id;
    Director.findByPk(id).then(object=>{
        const name = req.body.name ? req.body.name : object.name;
        const lastName = req.body.lastName ? req.body.lastName : object.lastName;
        object.update({
            name: name,
            lastName: lastName
        }).then(obj=>res.json(obj)).catch(err=>res.send(err));
    }).catch();
}

function destroy(req,res,next){
    const id = req.params.id;
    Director.destroy({ where: {id: id}})
            .then(obj => res.json(obj))
            .catch(err => res.send(err));
}

module.exports = {
    list, index, create, replace, update, destroy
};
