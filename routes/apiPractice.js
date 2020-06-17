const express = require('express');
const routerPractice = express.Router();
const Practice = require('../models/practice');

//Get Practice Questions from the DB
routerPractice.get('/practice', function(req,res,next){
    Practice.find().then((practiceQuestions => {
        res.status(200).json({practiceQuestions});
        console.log(practiceQuestions);
    }));
});

//Post Practice Questions to the DB
routerPractice.post('/practiceQuestions', function(req,res,next){
    Practice.create(req.body).then(function(practiceQuestions){
        res.status(201).json({
            message: "Question posted successful"
             });
        console.log(practiceQuestions);
    })
})

//Get Practice Questions based on ID from the DB
routerPractice.get('/:id', function(req,res,next){
    Practice.findById(req.params.id).then((practiceQuestions => {
        res.status(200).json({practiceQuestions});
        console.log(practiceQuestions);
    }));
});

//Update Practice Questions based on ID from the DB
routerPractice.post('/:id', function (req,res,next){
    Practice.findByIdAndUpdate(req.params.id).then((practiceQuestions => {
        
    }))
})


module.exports = routerPractice;
