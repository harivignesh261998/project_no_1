const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 


// set up express app
const app = express();
app.use(cors());

//connect to db
mongoose.connect("mongodb+srv://Mithun:HEdlAqrrRk61mN5G@cluster0-8iwmb.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function(){
        console.log("Connected to database");
    })
    .catch(function(){
        console.log('Connection failed');
    });

mongoose.Promise = global.Promise;

// use body-parser
app.use(bodyParser.json());

//initialize routes
app.use('/apiRegister',require('./routes/apiRegister'));
app.use('/apiLogin',require('./routes/apiLogin'));
app.use('/apiTest',require('./routes/apiTest'));
app.use('/apiPractice', require('./routes/apiPractice'));
app.use('/apiStudentDashboard', require('./routes/apiStudentDashboard'));

//listen for request
app.listen(process.env.port||4600,function(){
    console.log('Now listening for requests');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4600");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
  });
