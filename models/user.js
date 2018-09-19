const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    name: String,
    email: String,
    staff: { type: Boolean, default: false },
    classIDs: { type: Array, default: [] }
});

mongoose.model('users', userSchema);