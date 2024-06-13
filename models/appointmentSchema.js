const { name } = require("ejs")
const mongoose = require("mongoose")

const appoinmentSchema = new mongoose.Schema({
    property:{type: mongoose.Schema.Types.ObjectId,ref:"property"},
    user: {type: mongoose.Schema,enum:["scheduled", "completed","canceled"]},
    date:Date,

});

const AppoinmentSchema = mongoose.model("Appointment", appoinmentSchema);

module.exports = AppoinmentSchema;