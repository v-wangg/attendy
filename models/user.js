const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    name: String,
    staff: { type: Boolean, default: false }
});

mongoose.model('users', userSchema);