const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: String,
    email: String,
    googleID: String,
    present: Boolean,
    classIDs: Array 
})

module.exports = studentSchema;