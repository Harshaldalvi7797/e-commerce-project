let express = require("express");
let router = express.Router();
let Product = require("../dbModel/productModel");
router.post("/pagination/:page", async (req, res) => {
  let perPage = 9;
  let currentPage = req.params.page || 1;
  let data = await Product.find()
    .skip(perPage * currentPage - perPage)
    .limit(perPage);
  console.log(Product);

  let totalcount = await Product.find().count();

  let totalPages = Math.ceil(totalcount / perPage);
  res.send({
    perPage: perPage,
    currentPage: currentPage,
    data: data,
    totalPages: totalPages
  });
});
module.exports = router;
