const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const College = require('../models/college');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const { sendConfirmationEmail } = require('../services/emailService') 
//const nodemailer = require('nodemailer');
//const nodemailerSendgrid = require('nodemailer-sendgrid');
//const sgmail = require('@sendgrid/mail');
//sgmail.setApiKey = SENDGRID_API_KEY;



/*const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);*/


//get student data from the db
router.get('/student', function(req,res,next){
    Student.find().then((documents) => {
        res.status(200).json({documents});
        console.log('Registrations fetched successfully');
    });
});
/*
//add a new student to the db
router.post('/studentRegister', async(req,res,next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const student = new Student({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mailId: req.body.mailId,
                password: hashedPassword,
                contact: req.body.contact,
                degree: req.body.degree,
                department: req.body.department,
                graduatingYear: req.graduatingYear
            });
       student.save(function(err,result){
           if(err){
               console.log(err);
               res.status(409).json({
                   message: "E-Mail ID already exists. Try again with a different E-Mail ID"
               })
           }
           else {

                const token = jwt.sign({
                    _id: result._id},
                    process.env.JWT_SECRET_KEY
                )

                const url = `http://localhost:4000/confirmation/${token}`
                /*try{--------------------------------------
                    console.log('token')
                    console.log(url)
                    transport.sendMail({
                    from: 'mithunsolomon@gmail.com',
                    to: "cytwwsbnmhfvatxmfg@ttirv.com",
                    subject: "Confirmation Mail",
                    html: `Confirmation Email <a href = ${url}> ${url} </a>`
                }).then((res) => {
                    // res.status(201).json({
                    //     token: token,
                    //     message: "Registration successful"
                //});
                console.log(res);
                })}
                catch{
                    console.log(err);
                }-------------------------------------

                // res.status(201).json({
                //     token: token,
                //     message: "Registration successful"
            //});
            // console.log(result);

            

           }
       });
    } catch{
        res.status(500).json({
            message: "Registration Failed"
        });
    }
});*/

//add a new college/staff to the db
router.post('/collegeRegister', async(req,res,next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const college = new College({
                collegeName: req.body.collegeName,
                staffName: req.body.staffName,
                mailId: req.body.mailId,
                password: hashedPassword,
                contact: req.body.contact, 
                testProgress: req.body.testProgress,
                leaderBoard: req.body.leaderBoard
            });
       college.save(function(err,result){
           if(err){
               console.log(err);
               res.status(409).json({
                   message: "E-Mail ID already exists. Try again with a different E-Mail ID"
               })
           }
           else {
                res.status(201).json({
                message: "Registration successful"
            });
            console.log(result);
           }
       });
    } catch{
        res.status(500).json({
            message: "Registration Failed"
        });
    }
});


//update a Student in the db
router.put('/student/:id', function(req,res,next){
    res.send({type:'PUT'});
});

//delete a student from the db
router.delete('/student/:id', function(req,res,next){
    student.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'Registration DELETED'});
    });
});


module.exports = router;