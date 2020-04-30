let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
let User = require("../../dbModel/user");
let Joi = require("@hapi/joi");
let bcrypt = require("bcrypt");
let config = require("config");
let auth = require("../../routes/middleware/userAuth");

router.get("/me", auth, async (req, res) => {
  // @ts-ignore
  let data = await User.userModel
    // @ts-ignore
    .findById(req.user._id)
    // .select("-UserLogin.password -isAdmin");
    .select("-UserLogin.password -isAdmin  ");

  res.send(data);
});

router.post("/adminlogin", async (req, res) => {
  let { error } = AuthValidation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  let user = await User.userModel.findOne({
    "UserLogin.EmailId": req.body.UserLogin.EmailId,
    isAdmin: true
  });
  // let user1 = await User.userModel.find({
  //   "UserLogin.isAdmin": true
  // });
  // let user1 = await User.userModel.findOne({
  //   isAdmin: true
  // });
  // if (!user1) {
  //   return res.status(403).send({ message: "not Admin" });
  // }
  if (!user) {
    return res.status(403).send({ message: "Invalid UserId" });
  }

  //after password bcrypt
  // @ts-ignore
  let password = await bcrypt.compare(
    req.body.UserLogin.password,
    // @ts-ignore
    user.UserLogin.password
  );
  if (!password) {
    return res.status(403).send({ message: "Invalid password" });
  }

  // let token = jwt.sign({_id: user._id}, "apitoken");
  // @ts-ignore
  let token = user.UserToken();
  res
    .header("x-auth-token", token)
    .send({ message: "Login Successfull", token: token });
  //   res.send({ message: "Login Successfull" });
});

function AuthValidation(error) {
  let Schaema = Joi.object({
    UserLogin: {
      EmailId: Joi.string().required(),
      password: Joi.string().required()
    }
  });
  return Schaema.validate(error);
}

module.exports = router;
