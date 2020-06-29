const express = require('express');
const routerScoreUpdate = express.Router();
const Student = require('../models/student');

//post Student aTest Score in the DB
routerScoreUpdate.post('/aTestScoreUpdate/:id', function(req,res,next){
    Student.findById(req.params.id).then((student => {
        var aTestUpdate = req.body
        student.aTest.push(aTestUpdate);
        student.save(aTestUpdate);
        res.status(201).json(student);
        console.log(student);
    }));
});

//post Student cTest Score in the DB
routerScoreUpdate.post('/cTestScoreUpdate/:id', function(req,res,next){
    Student.findByIdAndUpdate(req.params.id, req.body, {new : true}).then((student => {
        var cTestUpdate = req.body
        student.cTest.push(cTestUpdate);
        student.save(cTestUpdate);
        res.status(201).json(student);
        console.log(student);
    }));
});

//get Student aTest Score from the DB
routerScoreUpdate.get('/aTestScore/:id', function(req,res,next){
    Student.findById(req.params.id).populate('aTestScore.aTest').exec(function(err, aTestScore){
        if(err)
            console.log(err);
        else{
            res.status(200).json(aTestScore.aTest)
            console.log(aTestScore.aTest);
        }
    }) 
});

//get Student cTest Score from the DB
routerScoreUpdate.get('/cTestScore/:id', function(req,res,next){
    Student.findById(req.params.id).populate('cTestScore.cTest').exec(function(err, cTestScore){
        if(err)
            console.log(err);
        else{
            res.status(200).json(cTestScore.cTest)
            console.log(cTestScore.cTest);
        }
    }) 
    });


//update overall Test score to the Student collection when one attempts Rractices and Tests
routerScoreUpdate.put('/overallScoreUpdate/:id', function(req,res,next){
    Student.findById(req.params.id).then((student => {
        var sum = req.body.score + student.overallScore
        student.overallScore = sum
        student.save(student.overallScore)
        console.log(student.overallScore)
        res.status(201).json(student.overallScore)
    }))
})


module.exports = routerScoreUpdate;