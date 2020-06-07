const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

//create question Schema & Models
const questionsSchema = new Schema({
    
})

//create cTest Schema & Models
const cTestSchema = new Schema({
    testName: String,
    createdOn: Date,
	questions: [{ ques: String,
        option1: String,
        option2: String,
        option3: String,
        option4: String,
        option5: String,
        answer: String }]
})

const CTest = mongoose.model('CTest',cTestSchema);
module.exports = CTest;