//Schema to hold all new questions asked by user that are not represented in the Questions collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newQuestionSchema = new Schema({
    question: { type: String },
    answer: { type: String },
})

const NewQuestion = mongoose.model('newquestion', newQuestionSchema)

module.exports = NewQuestion