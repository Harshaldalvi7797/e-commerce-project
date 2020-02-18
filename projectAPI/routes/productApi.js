let express = require("express");
let router = express.Router();
let multer = require("multer");
let Product = require("../dbModel/productModel");
let port = "http://localhost:4600";


let joi = require("@hapi/joi");

let storage= multer.diskStorage({
    destination: function(req,file,cb)
    {
        cb(null,"./uploads/")
    }, 
    filename: function(req,file,cb)
    {
        cb(null,file.originalname)
    }

});

let fileFilter = function(req,file,cb)
{
    if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg")
    {
        cb(null,true)
    }
    else{
        cb(null,false)
    }
};

let uploads = multer({
    storage : storage,
    limits :  {

        fileSize: 1024 * 1024 * 5

    },
    fileFilter:fileFilter
})
//insert product
router.post("/addproduct",uploads.single("image"),async (req,res)=>
{
    let newproduct = new Product({
        name:req.body.name,
        // image:req.body.image,
        image: port + "/uploads/" + req.file.filename,
        description:req.body.description,
        price:req.body.price,
        offerPrice:req.body.offerPrice,
        isAvailable:req.body.isAvailable,
        isTodayOffer:req.body.isTodayOffer,
        category:req.body.category,
        subCategory:req.body.subCategory,
        isAdmin:req.body.isAdmin,
        recordDate:req.body.recordDate,
        updateDate:req.body.updateDate

    });
    let data = await newproduct.save();
    res.send({message:"product addess successfully",d:data});

});
module.exports=router;

