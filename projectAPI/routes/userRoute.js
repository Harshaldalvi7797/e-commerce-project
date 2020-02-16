// @ts-nocheck
let express = require("express");
let router= express.Router();
let joi = require("@hapi/joi");
let User = require("../dbModel/user");



//Fetch data

router.get("/fetchuser", async (req,res)=>
{
    let data = await User.find();
    res.send({d:data});

})


//fetch data by id

router.get("/fetchuser/:id" , async (req,res) =>
{
    let user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404).send({message: "Invalid user id"});

    }
    res.send({data : user});

})

//Create Data


router.post("/createuser", async (req,res)=>
{
    // let user = User.findOne({"UserLogin.EmailId": req.body.UserLogin.EmailId});
    // if(!user) 
    // {
    //     return res.status(403).send({Message:"User Already Exist"})
    // }
    // let {error} = validationError(req.body);
    // if(error) 
    // {
    //     return  res.send(error.details[0].message);
    // }

    
    let newuser = new User({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        UserLogin : req.body.UserLogin,
        newsletterCheck : req.body.newsletterCheck,
        isAdmin : req.body.isAdmin,
        recordDate : req.body.recordDate,
        updateDate : req.body.updateDate

    });
    let data = await newuser.save();
    res.send({Message:"Thank You", d: data});


})

//update data

router.put("/updateuser/:id" , async (req,res)=>
{
    let user = User.userModel.findOne({ "UserLogin.EmailId": req.body.UserLogin.EmailId });
  
    if(!user)
    {
        res.status(404).send({message: "Invalid user id"});
    }
    let {error} = validationError(req.body);
    if(error) 
    {
        return  res.send(error.details[0].message);
    }

    user.FirstName = req.body.FirstName,
   
    user.LastName = req.body.LastName,

   
    user.UserLogin.EmailId = req.body.UserLogin.EmailId,
  
    user.UserLogin.password = req.body.UserLogin.password,
    user.isAdmin = req.body.isAdmin
    await user.save();
    res.send({ message: "data updated", d: data })


})

//Remove data

router.delete("/removeuser/:id" , async (req,res) =>
{
    let user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
        res.status(404).send({ message: "Invalid User Id" });
    }
    res.send({ message: "Thank You! Come Back Again:)" });
})



function validationError(error) {
    let schema = joi.object({
        FirstName: joi.string().min(3).max(25).required(),
        LastName: joi.string().min(3).max(25).required(),
        newsletterCheck:joi.required(),
        UserLogin: {
            EmailId: joi.string().email(),
            password: joi.string().required()
        },
        isAdmin: joi.required()
    })
    return schema.validate(error);
}

module.exports= router;