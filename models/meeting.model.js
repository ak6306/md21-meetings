const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetSchema = new Schema({
    MeetingName: {type: String, required: true},
    NumberPeople: {type: Number, required: true},
    DateCreated: {type: String},
    StartTime: {type: String},
    EndTime: {type: String},
}, {
    timestamps: true,
})

const Meet = mongoose.model('Meet', meetSchema);
module.exports = Meet;