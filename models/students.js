const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    email: String,
    name: String,
    googleID: String,
    present: Boolean
})

module.exports = studentSchema;