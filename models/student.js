const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Atest Schema & Models
const ATestSchema = new Schema({
    testId: {type: mongoose.Schema.Types.ObjectId, ref: 'ATest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    timeTaken: Number
});

//create CTest Schema & Models
const CTestSchema = new Schema({
    testId: {type: mongoose.Schema.Types.ObjectId, ref: 'CTest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    timeTaken: Number
});

//create Student Schema & Models
const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: [true,'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    mailId: {
        type: String,
        required: [true, 'E Mail-ID is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    contact: Number,
    degree: String,
    department: String,
    graduatingYear: Date,
    isVerified: {type: Boolean, default: false},
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    collegeName:{ type: String},
    practicedQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practice' }],
    overallScore: {type: Number, default: 0},
    aTest: [ ATestSchema ],
    cTest: [ CTestSchema ]
})


const Student = mongoose.model('Student',StudentSchema);
module.exports = Student; 