const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = require('./students.js');

const classSchema = new Schema({
    name: String,
    dateCreated: Date,
    students: {StudentSchema},
    _user: { type: Schema.Types.ObjectId, ref: "User" }
})

mongoose.model('classes', classSchema);
