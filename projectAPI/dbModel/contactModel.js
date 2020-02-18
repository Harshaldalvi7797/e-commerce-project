let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let config = require("config");


let contactSchema = new mongoose.Schema({
    name:{ type: String,min:3,max:250,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}

})
let contact = mongoose.model('contact',contactSchema);

module.exports=contact;

