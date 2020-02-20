let mongoose = require("mongoose");

let cartItemSchema = new mongoose.Schema({

    prodId : { type: String , required:true },
    name : { type:String,required:true },
    image : {type:String, required: true },
    price : {type:Number, required:true },
    quantity : {type: Number , required:true},
    totalPrice :{type:Number, required:true},
    recordDate:{type:Date,default:Date.now},
    updatedate:{type:Date,default:Date.now}
});
let cartItemRecords = mongoose.model('cartItemRecords', cartItemSchema);

let usercartSchema  = new mongoose.Schema({
    userEmail : {type: String,required:true},
    cartItem : [cartItemSchema]
});

let userCartItem = mongoose.model('usercartItem',usercartSchema);

module.exports = {usercartSchema, cartItemRecords};