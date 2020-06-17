const express = require('express');
const routerTest = express.Router();
const Student = require('../models/student')
const ATest = require('../models/aTest');
const CTest = require('../models/cTest');
const { findByIdAndUpdate } = require('../models/student');


//post new aTest in the DB
routerTest.post('/newATest', function(req,res,next){
    const aTest = new ATest({
        testName: req.body.testName,
        createdOn: req.body.createdOn,
        questions: req.body.questions
    })
    aTest.save(function(err,newATest){
        res.status(201).json({
            message: "Admin Test Successfully Created"
        });
        console.log(newATest);
    });
});

//post new cTest in the DB
routerTest.post('/newCTest', function(req,res,next){
    const cTest = new CTest({
        testName: req.body.testName,
        createdOn: req.body.createdOn,
        questions: req.body.questions
    });
    cTest.save(function(err,newCTest){
        res.status(201).json({
            message: "College Test Successfully Created"
        });
        console.log(newCTest);
    })
});


//get an specific aTest using ID from the ATest Collection
routerTest.get('/getATest/:id', function(req,res,next){
    ATest.findById(req.params.id).then((aTest => {
        console.log(aTest);
        res.status(200).json(aTest);
    }))
})


//get an specific cTest using ID from the CTest Collection
routerTest.get('/getCTest/:id', function(req,res,next){
    CTest.findById(req.params.id).then((cTest => {
        console.log(cTest);
        res.status(200).json(cTest);
    }))
})

//add question manually to a specific aTest in the ATest Collection
routerTest.post('/addAQuestion/:id', function(req,res,next){
    ATest.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((aTest) => {
        var question = req.body
        aTest.questions.push(question);
        aTest.save(question);
        res.status(201).json(aTest);
        console.log(aTest);
    })
})


//add question manually to a specific aTest in the ATest Collection
routerTest.post('/addCQuestion/:id', function(req,res,next){
    CTest.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((cTest) => {
        var question = req.body
        cTest.questions.push(question);
        cTest.save(question);
        res.status(201).json(cTest);
        console.log(cTest);
    })
})

module.exports = routerTest;