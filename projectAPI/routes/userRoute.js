let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");
let User = require("../dbModel/user");
let bcryt = require("bcrypt");
let auth = require("./middleware/userAuth");
let admin = require("./middleware/admin");

//insert Data
router.post("/createuser", async (req, res) => {
  let user = await User.userModel.findOne({
    "UserLogin.EmailId": req.body.UserLogin.EmailId
  });
  if (user) {
    return res.status(403).send({ message: "User Already Exist" });
  }

  let { error } = User.validationError(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  let newuser = new User.userModel({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    UserLogin: req.body.UserLogin,
    newsletterCheck: req.body.newsletterCheck,
    isAdmin: req.body.isAdmin,
    recordDate: req.body.recordDate,
    updateDate: req.body.updateDate
  });

  let salt = await bcryt.genSalt(10);
  // @ts-ignore
  newuser.UserLogin.password = await bcryt.hash(
    newuser.UserLogin.password,
    salt
  );
  let data = await newuser.save();
  res.send({ message: "Thank You", d: data });
});

//Fetch all data
// @ts-ignore
router.get("/fetchuser", [auth, admin], async (req, res) => {
  let data = await User.userModel.find();
  res.send({ d: data });
});

//fetch data by id

router.get("/fetchuser/:id", async (req, res) => {
  let user = await User.userModel.findById(req.params.id);
  if (!user) {
    return res.status(404).send({ message: "Invalid user id" });
  }
  res.send({ data: user });
});

//update data

router.put("/updateuser/:id", async (req, res) => {
  let user = await User.userModel.findById(req.params.id);

  if (!user) {
    return res.status(404).send({ message: "Invalid user id" });
  }
  let { error } = User.validationError(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  // @ts-ignore
  (user.FirstName = req.body.FirstName),
    // @ts-ignore
    (user.LastName = req.body.LastName),
    // @ts-ignore
    (user.newsletterCheck = req.body.newsletterCheck),
    // @ts-ignore
    (user.UserLogin.EmailId = req.body.UserLogin.EmailId),
    // @ts-ignore
    (user.UserLogin.password = req.body.UserLogin.password),
    // @ts-ignore
    (user.isAdmin = req.body.isAdmin);
  await user.save();
  res.send({ message: "data updated" });
});

//Remove data

router.delete("/removeuser/:id", [auth, admin], async (req, res) => {
  let user = await User.userModel.findByIdAndRemove(req.params.id);
  if (!user) {
    return res.status(404).send({ message: "Invalid User Id" });
  }
  res.send({ message: "Thank You! Come Back Again:)" });
});

//IEP information expert principle

module.exports = router;
