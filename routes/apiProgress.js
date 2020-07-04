const express = require('express');
const routerProgress = express.Router();
const Student = require('../models/student');

routerProgress.post('/daily/:id', function(req,res,next){
    Student.findByIdAndUpdate(req.params.id).then(student => {
        var unCalculated = new Array()
        unCalculated = student.progress.dailyProgress.filter(docs => docs.calculated === false)
        if(unCalculated.length === 0){
            var newDateProgress = req.body
            student.progress.dailyProgress.push(newDateProgress)
            student.save(newDateProgress)
            res.status(201).json(student.progress)
            console.log(student.progress)
        }
        else if(unCalculated.length > 1)
        {
            res.status(503).json('Progress update not calculated for '+unCalculated.length+' days')
        } 
        else {
            var previous = unCalculated[0]
            
            var cDate = new Date(req.body.date)
            var cDateD = String(cDate.getDate()+'-')
            var cDateM = String(cDate.getMonth()+1+'-')
            var cDateY = String(cDate.getYear()+1900)
            var currentDate = cDateD.concat(cDateM)
            currentDate = currentDate.concat(cDateY)
            
            var pDate = new Date(previous.date)
            var pDateD = String(pDate.getDate()+'-')
            var pDateM = String(pDate.getMonth()+1+'-')
            var pDateY = String(pDate.getYear()+1900)
            var previousDate = pDateD.concat(pDateM)
            previousDate = previousDate.concat(pDateY)

            if(previousDate == currentDate){
                unCalculated[0].sum = unCalculated[0].sum + req.body.sum
                unCalculated[0].nthEntry = unCalculated[0].nthEntry + 1
                student.save(unCalculated[0])
                res.status(201).json(student.progress)
                console.log(student.progress)
            }
            else{
                unCalculated[0].dailyPercentage = unCalculated[0].sum / unCalculated[0].nthEntry
                unCalculated[0].calculated = true
                var newDateProgress = req.body
                student.progress.dailyProgress.push(newDateProgress)
                student.save(newDateProgress)
                res.status(201).json(student.progress)
                console.log(student.progress)
            }
        }
    })
})

////Update Monthly progress in Student DB (id = Student-ID, body = date, sum (i.e. score percentage), nthEntry)
routerProgress.post('/monthly/:id', function(req,res,next){
    Student.findByIdAndUpdate(req.params.id).then(student => {
        var unCalculated = new Array()
        unCalculated = student.progress.monthlyProgress.filter(docs => docs.calculated === false)
        if(unCalculated.length === 0)
        {
            var newMonthProgress = req.body
            var cDate = new Date(req.body.date)
            var currentMonth = cDate.getMonth() + 1
            newMonthProgress.month = currentMonth
            newMonthProgress.lastUpdate = req.body.date
            student.progress.monthlyProgress.push(newMonthProgress)
            student.save(newMonthProgress)
            res.status(201).json(student.progress)
            console.log(student.progress)      
        }
        else if(unCalculated.length > 1){
            res.status(503).json('Progress update not calculated for '+unCalculated.length+' months')
        }
        else{
            var previous = unCalculated[0]
            var pDate = new Date(previous.lastUpdate)
            var cDate = new Date(req.body.date)
            var previousMonth = pDate.getMonth() + 1
            var currentMonth = cDate.getMonth() + 1

            if(previousMonth == currentMonth){
                unCalculated[0].sum = unCalculated[0].sum + req.body.sum
                unCalculated[0].nthEntry = unCalculated[0].nthEntry + 1
                unCalculated[0].lastUpdate = req.body.date
                student.save(unCalculated[0])
                res.status(201).json(student.progress)
                console.log(student.progress)
            }
            else{
                unCalculated[0].monthlyPercentage = unCalculated[0].sum / unCalculated[0].nthEntry
                unCalculated[0].calculated = true
                var newMonthProgress = req.body
                newMonthProgress.month = currentMonth
                newMonthProgress.lastUpdate = req.body.date
                student.progress.monthlyProgress.push(newMonthProgress)
                student.save(newMonthProgress)
                res.status(201).json(student.progress)
                console.log(student.progress)   
            }
        }
    })
})

//Retrieve Daily Progress from the Student DB (id = Student-ID)
routerProgress.get('/dailyProgress/:id', function(req, res,next){
    Student.findById(req.params.id).then(student => {
        if(student.progress.dailyProgress === null){
            res.status(200).json('No Progress yet')
            console.log('No Progress yet')
        }
        else{
            res.status(200).json(student.progress.dailyProgress)
            console.log(student.progress.dailyProgress)
        }
    })
})

//Retrieve Monthly Progress from the Student DB (id = Student-ID)
routerProgress.get('/monthlyProgress/:id', function(req, res,next){
    Student.findById(req.params.id).then(student => {
        if(student.progress.monthlyProgress === null){
            res.status(200).json('No Progress yet')
            console.log('No Progress yet')
        }
        else{
            res.status(200).json(student.progress.monthlyProgress)
            console.log(student.progress.monthlyProgress)
        }
    })
})


module.exports = routerProgress;