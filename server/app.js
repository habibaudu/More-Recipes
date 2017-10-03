 import express from "express";
 import logger from "morgan";
 import bodyParser from "body-parser";

// const express = require("express");
// const logger = require("morgan");
// const bodyParser= require("body-parser");


// express app set up

const app = express();

// log request to the console

app.use(logger('dev'));

// parsing incomming request data

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));


 require('./server/routes')(app);
 
 //if no route match the url that was supplied, these will be executed
app.get('*', (req,res) => res.status(200).send({  
    message :'Welcome to our More-Recipes Api',
}));

module.exports= app;


