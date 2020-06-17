const express = require('express');
const routerPracticedQuestionsUpdate = express.Router();
const Student = require('../models/student');

//post Practiced Questions IDs in the DB
routerPracticedQuestionsUpdate.post('/:id', function(req,res,next){
    Student.findById(req.params.id).then((student => {
        var pQuestions = req.body.practicedQuestions
        student.practicedQuestions.push(pQuestions);
        student.save(pQuestions);
        res.status(201).json(student);
        console.log(student);
    }));
});

//get Pracficed Questions IDs from the DB
    routerPracticedQuestionsUpdate.get('/:id', function(req,res,next){
        Student.findById(req.params.id).then((student => {
            res.status(200).json(student.practicedQuestions);
            console.log(student.practicedQuestions);
        }))
    })

module.exports = routerPracticedQuestionsUpdate;