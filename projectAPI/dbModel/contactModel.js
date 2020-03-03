let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let config = require("config");

let contactSchema = new mongoose.Schema({
  name: { type: String, min: 3, max: 250, required: false },
  email: { type: String, required: false },
  message: { type: String, required: false }
});
let contact = mongoose.model("contact", contactSchema);

module.exports = contact;
