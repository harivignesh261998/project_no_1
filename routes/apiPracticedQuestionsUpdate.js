const express = require('express');
const routerPracticedQuestionsUpdate = express.Router();
const Student = require('../models/student');

//post Student aTest Score in the DB
routerPracticedQuestionsUpdate.post('/:id', function(req,res,next){
    Student.findById(req.params.id).then((student => {
        var pQuestions = req.body.practicedQuestions
        student.practicedQuestions.push(pQuestions);
        student.save(pQuestions);
        res.status(201).json(student);
        console.log(student);
    }));
});

module.exports = routerPracticedQuestionsUpdate;