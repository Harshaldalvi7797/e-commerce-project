let express = require("express");
let router= express.Router();
let Contact = require("../dbModel/contactModel");

router.post("/contact", async (req,res)=>
{
    let newcontact = new Contact({
        name: req.body.name,
        email : req.body.email,
        message : req.body.message
    });
    let data = await newcontact.save();
    res.send({message:"thanks for contact",d: data})

})

router.get("/allenquries", async (req,res)=>
{
    let data = await Contact.find();
    res.send({d:data});
});

router.delete("/remove/:id", async (req,res)=>
{
    let contact = await Contact.findByIdAndRemove(req.params.id);

    
        if(!contact)
        {
           return res.status(404).send({ message: "Invalid User Id" });
           
        }
        res.send({ message: "okk" });

    
    
   
})
module.exports = router;