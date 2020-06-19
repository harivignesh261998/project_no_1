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


//get all the aTests from the ATest Collection
routerTest.get('/getATests', function(req,res,next){
    ATest.find({}, {_id: 1, testName: 1, createdOn: 1, duration: 1}).then((aTests) => {
        res.status(201).json(aTests)
        console.log(aTests)
    })
})


//get all the cTests from the CTest Collection
routerTest.get('/getCTests', function(req,res,next){
    CTest.find({}, {_id: 1, testName: 1, createdOn: 1, duration: 1}).then((cTests) => {
        res.status(201).json(cTests)
        console.log(cTests)
    })
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


//update aTest data in the db
routerTest.put('/aTestUpdate/:id', function(req,res,next){
    console.log("enter");
    console.log(req.params.id);
    Student.findByIdAndUpdate(req.params.id, req.body).then(function(err, aTestRecord){
            console.log(aTestRecord);
    })
});

//update cTest data in the db
routerTest.put('/cTestUpdate/:id', function(req,res,next){
    console.log("enter");
    console.log(req.params.id);
    Student.findByIdAndUpdate(req.params.id, req.body).then(function(err, cTestRecord){
            console.log(cTestRecord);
    })
});


module.exports = routerTest;