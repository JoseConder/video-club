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
        console.log(user._id);
        if(user){
            bcrypt.hash(password, user.salt, (err, hash)=>{
                if(err){
                    res.status(403).json({
                        msg:"login fail",
                        obj:err
                    })
                }
                if (hash === user.password) {
                    const token = jwt.sign(
                        {
                            id: user._id,  
                            data: user.data,
                            exp: Math.floor(Date.now() / 1000) + 240
                        },
                        JwtKey
                    );

                    user.token = token;
                
                    res.status(200).json({
                        msg: "login success",
                        obj: user,  // Devuelve el objeto del usuario
                        token: token
                    });
                }else{
                    res.status(403).json({
                        msg:"login failed"
                    })

                }
            });

        }else{
            res.status(403).json({
                msg:"login failedd",
                obj:null
            })

        }
    }).catch(e => res.status(403).json({
        "message":"login faileddd",
        obj:e
    }))
}



module.exports = {
    home,
    login
}
