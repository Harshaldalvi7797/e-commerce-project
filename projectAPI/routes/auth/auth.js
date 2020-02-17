let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
let User = require("../../dbModel/user");
let Joi=require("@hapi/joi");
let bcrypt = require("bcrypt");
let config = require("config");

router.post("/login", async (req,res)=>
{
    let {error} = AuthValidation(req.body)
    if(error) {return res.send(error.details[0].message) }
     
    let user = await User.userModel.findOne({"UserLogin.EmailId": req.body.UserLogin.EmailId});
    if(!user){ return res.status(403).send({message:"Invalid UserId"}) }

    // let password = await User.findOne({"UserLogin.password" : req.body.UserLogin.password});
    // if(!password) {return res.status(403).send({message:"Invalid Password"}) }

    //after password bcrypt
    // @ts-ignore
    let password = await bcrypt.compare(req.body.UserLogin.password, user.UserLogin.password);
    if(!password) {return res.status(403).send({message:"Invalid password"}) };

    // let token = jwt.sign({_id: user._id}, "apitoken");
    // @ts-ignore
    let token = user.UserToken();
    res.header("a-auth-token",token).send({message:"Login Successfull", token:token})

});

function AuthValidation(error)
{
    let Schaema = Joi.object({
        UserLogin:{
            EmailId: Joi.string().required().email(),
            password: Joi.string().required()
        }

    })
    return Schaema.validate(error);
} 

module.exports=router;

