const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

// pull in Routes
const recipeRouter = require('./recipes/recipe-router');

// use 
server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

server.use('/api/recipes', recipeRouter);

server.use("/", (req,res) => {
    res.json("Project Api")
})

// middleware
server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: "Something is terribly wrong"
    })
})

module.exports = server;
