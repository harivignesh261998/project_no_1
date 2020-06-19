const express = require('express');
const mongoose = require('mongoose');
const routerStudentDashboard = express.Router();
const Student = require('../models/student');
const Practice = require('../models/practice');


//Get Student Profile from DB
routerStudentDashboard.get('/profile/:id', function(req,res,next){
    Student.findById(req.params.id).then((studentProfile => {
        res.status(200).json({
        practicedQuestions: studentProfile.practicedQuestions,
        firstName: studentProfile.firstName,
        lastName: studentProfile.lastName,
        mailId: studentProfile.mailId,
        aTest: studentProfile.aTest,
        cTest: studentProfile.cTest
        });
    }));
});

module.exports = routerStudentDashboard;