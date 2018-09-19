const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = require('./student.js');

const classSchema = new Schema({
    name: String,
    dateCreated: Date,
    dateHeld: String,
    students: StudentSchema,
    _instructor: { type: Schema.Types.ObjectId, ref: "User" },
    present: { type: Number, default: 0 },
    absent: { type: Number, default: 0 }
})

mongoose.model('classes', classSchema);
