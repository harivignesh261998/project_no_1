const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Progress Schema & Models
const ProgressSchema = new Schema({
    monthlyProgress: [{
        month: Number,
        sum: {type: Number, default: 0},
        nthEntry: {type: Number, default: 0},
        calculated: {type: Boolean, default: false},
        monthlyPercentage: {type: Number, default: 0},
        lastUpdate: Date
        }],
    weeklyProgress: [{
                    weekNumber: Number,
                    weekNumberOfMonth: Number,
                    startDate: Date,
                    endDate: Date,
                    weeklyPercentage: {type: Number, default: 0}
        }],
    dailyProgress: [{
            date: Date,
            sum: {type: Number, default: 0},
            nthEntry: {type: Number, default: 0},
            calculated: {type: Boolean, default: false},
            dailyPercentage: {type: Number, default: 0}
        }],
});

//create Atest Schema & Models
const ATestSchema = new Schema({
    testId: {type: mongoose.Schema.Types.ObjectId, ref: 'ATest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    attemptedDate: Date
});

//create CTest Schema & Models
const CTestSchema = new Schema({
    testId: {type: mongoose.Schema.Types.ObjectId, ref: 'CTest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    attemptedDate: Date
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
    profilePicture: String,
    isVerified: {type: Boolean, default: false},
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    collegeName:{ type: String},
    practicedQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practice' }],
    overallScore: {type: Number, default: 0},
    aTest: [ ATestSchema ],
    cTest: [ CTestSchema ],
    progress: {type: ProgressSchema}
})


const Student = mongoose.model('Student',StudentSchema);
module.exports = Student; 