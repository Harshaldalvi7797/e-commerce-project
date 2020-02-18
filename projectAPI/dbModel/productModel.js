let mongoose = require("mongoose");
let jwt  = require("jsonwebtoken");
let config = require("config");

let productSchema = new mongoose.Schema({
    name : {type:String , min:3,max:250,required:true},
    image: {type:String,required:true,minlength:3,maxlength:100},
    description:{type:String,required:true,minlength:10,maxlength:250},
    price:{type:Number,required:true,minlength:1},
    offerPrice:{type:Number,required:true,minlength:1},
    isAvailable:{type:Boolean, required:true},
    isTodayOffer:{type:Boolean,required:true},
    category:{type:String,required:true,minlength:3,maxlength:100},
    subcategory:{type:String,minlength:3,maxlength:100},
    isAdmin:{type:Boolean,required:true},
    recordDate:{type:Date,default:Date.now},
    updatedate:{type:Date,default:Date.now}


});
let product = mongoose.model('product',productSchema);
module.exports = product;
