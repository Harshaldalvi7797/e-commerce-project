let express = require("express");
let router = express.Router();
let nodemailer = require("nodemailer");
let Contact = require("../dbModel/contactModel");

router.post("/contact", async (req, res) => {
  let contact = await Contact.findOne({ email: req.body.email });

  if (!contact) {
    return res.status(402).send({ message: "Invalid email id" });
  }

  let newcontact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  let data = await newcontact.save();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports

    auth: {
      user: "dalviharshal7797@gmail.com", // generated ethereal user
      pass: "8087737437" // generated ethereal password
    },
    tls: { rejectUnauthorized: false },
    debug: true
  });

  if (!transporter)
    res.status(401).send({
      message: "something went wrong"
    });
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Harsh App:sweat_smile:" <dalviharshal7797@gmail.com>', // sender address
    // @ts-ignore
    to: contact.email, // list of receivers
    subject: "Reset Your Password", // Subject line:smile:
    text: "Thanks for Contact Us" // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

  res.send({ message: "thanks for contact", d: data });
});

router.get("/allenquries", async (req, res) => {
  let data = await Contact.find();
  res.send({ d: data });
});

router.delete("/remove/:id", async (req, res) => {
  let contact = await Contact.findByIdAndRemove(req.params.id);

  if (!contact) {
    return res.status(404).send({ message: "Invalid User Id" });
  }
  res.send({ message: "okk" });
});
module.exports = router;
