let mongoose = require("mongoose");


let subcategorySchema = new mongoose.Schema({
    name:{type:String}
});
let subCategory = mongoose.model('subcategory',subcategorySchema);

let categorySchema = new mongoose.Schema({
    categoryName:{type:String},
    subCategory:[subcategorySchema]
})
let category = mongoose.model('category',categorySchema);
module.exports= {subCategory,category};