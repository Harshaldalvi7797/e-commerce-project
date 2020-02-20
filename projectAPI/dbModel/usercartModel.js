let mongoose = require("mongoose");

let cartItemSchema = new mongoose.Schema({

    prodId : { type: String  },
    name : { type:String },
    image : {type:String },
    price : {type:Number},
    quantity : {type: Number },
    totalPrice :{type:Number },
    recordDate:{type:Date,default:Date.now},
    updatedate:{type:Date,default:Date.now}
});
let cartItemRecords = mongoose.model('cartItemRecords', cartItemSchema);

let usercartSchema  = new mongoose.Schema({
    userEmail : {type: String},
    cartItem : [cartItemSchema]
});

let userCartItem = mongoose.model('usercartItem',usercartSchema);

module.exports = { cartItemRecords,userCartItem,cartItemSchema};