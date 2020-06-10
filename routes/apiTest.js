const express = require('express');
const routerTest = express.Router();
const Student = require('../models/student')
const ATest = require('../models/aTest');
const CTest = require('../models/cTest');


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


//update aTest data in the db
routerTest.put('/aTestUpdate/:id', function(req,res,next){
    console.log("enter");
    console.log(req.params.id);
    Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(err, aTestRecord){
            console.log(aTestRecord);
    })
});

//update cTest data in the db
routerTest.put('/cTestUpdate/:id', function(req,res,next){
    console.log("enter");
    console.log(req.params.id);
    Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(err, cTestRecord){
            console.log(cTestRecord);
    })
});


module.exports = routerTest;