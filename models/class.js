const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = require('./students.js');

const classSchema = new Schema({
    name: String,
    date: Date,
    students: {StudentSchema}
})