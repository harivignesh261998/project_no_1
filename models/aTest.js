const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

//create aTest Schema & Models
const aTestSchema = new Schema({
    testName: String,
    createdOn: Date,
	questions: [{ ques: String,
		option1: String,
		option2: String,
		option3: String,
		option4: String,
		option5: String,
		answer: String
	}]	
})

const ATest = mongoose.model('ATest',aTestSchema);
module.exports = ATest;