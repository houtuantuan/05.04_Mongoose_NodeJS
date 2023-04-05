const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema= new Schema({
 firstName:{
    type:String,
    required:true,
    trim:true
 },
 fullName:{
    type:String,
    required:true,
    trim:true
 },
 email:{
    type:String,
    required:true,
    trim:true
 }

});

module.exports=mongoose.model("Student",studentSchema);