const express = require('express');
const Director = require('../models/director');

function create(req, res, next) {    
    const name = req.body.name;
    const lastName = req.body.lastName;
    
    const director = new Director({name:name, lastName:lastName});
    director.save().then(obj => res.status(200).json({
        msg:"Director created",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg:"Error creating director",
        obj:ex
    }));
}

function list(req, res, next) {
    let page = req.params.page ? req.params.page: 1;
    const options = {page:page, limit:10};
    Director.paginate({}, options).then(objs => res.status(200).json({
        msg:"Directors list",
        obj:objs
    })).catch(ex => res.status(500).json({
        msg:"Error listing directors",
        obj:ex
    }));
}

function index(req, res, next) {    
    const id = req.params.id;
    Director.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: `Director ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        msg:"Error getting director",
        obj:ex
    }));
}

function replace(req, res, next) {    
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let lastName = req.body.lastName ? req.body.lastName : "";

    let director = new Object({
        _name : name,
        _lastName : lastName
    });

    Director.findOneAndUpdate({"_id":id}, director, {new:true}).then(obj => res.status(200).json({
        msg: "Director replaced",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg:"Error replacing director",
        obj:ex
    }));

}

function update(req, res, next) {
    const id = req.params.id;
    let name = req.body.name;
    let lastName = req.body.lastName;

    let director = new Object();
    if(name) director._name = name;
    if(lastName) director._lastName = lastName;

    Director.findOneAndUpdate({"_id":id}, director).then(obj => res.status(200).json({
        msg: "Director updated",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg:"Error updating director",
        obj:ex
    }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Director.findByIdAndRemove({"_id":id}).then(obj => res.status(200).json({
        msg: "Director deleted",
        obj:obj
    })).catch(ex => res.status(500).json({
        msg: "Cant destroy director",
        obj:ex
    }));
}

module.exports={
    list,
    index,
    create,
    replace,
    update,
    destroy
};