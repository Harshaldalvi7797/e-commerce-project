let mongoose = require("mongoose");
let userSchema= new mongoose.Schema({
    FirstName: { type: String, min: 3, max: 250, alphanum: true, trim: true },
    LastName: { type: String, min: 4, max: 250, alphanum: true, trim: true },
    UserLogin: {
        EmailId: { type: String, required: true, unique: true },
        password: { type: String, required: true } 
    },
    newsletterCheck:{type:Boolean},
    isAdmin:{ type:Boolean},
    recordDate:{type:Date , default:Date.now},
    updateDate : {type:Date , default : Date.now}
  
});

let userModel = mongoose.model("users",userSchema);
module.exports = userModel;