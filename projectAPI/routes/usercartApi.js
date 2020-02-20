let express = require("express");
let router = express.Router();
let multer = require("multer");
let Cart = require("../dbModel/usercartModel");
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

router.post("/addcart",uploads.single("image"), async (req,res)=>
{
    let newcart = new Cart.cartItemRecords({
        prodId:req.body.prodId,
        name : req.body.name,
        image: port + "/uploads/" + req.file.filename,
        price : req.body.price,
        quantity :req.body.quantity,
        totalPrice: req.body.totalPrice,
        recordDate:req.body.recordDate,
        updateDate: req.body.updateDate
         });

    let data = await newcart.save();
    res.send({message: "product addedd in cart successfully",d:data});
});

router.get("/getcart", async (req,res)=>
{
    let data = await Cart.cartItemRecords.find();
    res.send({d:data});

});

router.delete("/removecart/:id" , async (req,res)=>
{
    let cart = await Cart.cartItemRecords.findByIdAndRemove(req.params.id);
    if(!cart)
    {
        return res.status(403).send({message:"invalid id"})
    }
    res.send({message:"remove from cart"})

} )

router.post("/addusercart", async(req,res)=>
{
    try {
        let aa= await Cart.cartItemRecords.find().select("name")
        console.log(aa);
        // @ts-ignore
       
        let userCart = new Cart.userCartItem({
            userEmail : req.body.userEmail,
            cartItem:aa
           
            
        });
        let data=await userCart.save();
        res.send({message:"data addede successfully",item:data});
    } catch (error) {
      console.log(error.message);
        
    }
  

})

module.exports = router;

