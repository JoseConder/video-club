const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
function home(req,res,next){
    res.render("index", {title: 'Express'})
}

function login(req,res,next){
    const email = req.body.email
    const password = req.body.password
    const JwtKey = "5710688c0304e5c985c593541265f14b"

    User.findOne({"_email":email}).then(user =>{
        if(user){
            bcrypt.hash(password, user.salt, (err, hash)=>{
                if(err){
                    res.status(403).json({
                        msg:"login failed",
                        obj:err
                    })
                }
                if(hash === user.password){
                    res.status(200).json({
                        msg:"login success",
                        obj: jwt.sign({data:user.data, exp:Math.floor(Date.now()/1000)+240}, JwtKey)
                    })
                }else{
                    res.status(403).json({
                        msg:"login failed"
                    })

                }
            });

        }else{
            res.status(403).json({
                msg:"login failed",
                obj:null
            })

        }
    }).catch(e => res.status(403).json({
        "message":"login failed",
        obj:ex
    }))
}



module.exports = {
    home,
    login
}
