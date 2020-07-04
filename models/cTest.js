const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

//create cTest Schema & Models
const cTestSchema = new Schema({
    testName: String,
    testDate: Date,
    startTime: Date,
    closeTime: Date,
    maxMark: Number,
    highestScore: {type: Number, default: 0},
    averageScore: {type: Number, default: 0},
    leastScore: {type: Number, default: 99999},
    duration: Number,
	questions: [{ ques: String,
        option1: String,
        option2: String,
        option3: String,
        option4: String,
        option5: String,
        answer: String }]
})

const CTest = mongoose.model('CTest', cTestSchema);
module.exports = CTest;