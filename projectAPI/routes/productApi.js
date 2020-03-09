let express = require("express");
let router = express.Router();
let multer = require("multer");
let Product = require("../dbModel/productModel");
let port = "http://localhost:4600";
let joi = require("@hapi/joi");
let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
let fileFilter = function(req, file, cb) {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
let uploads = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
//insert product
router.post("/addproduct", uploads.single("image"), async (req, res) => {
  let newproduct = new Product({
    name: req.body.name,
    // image:req.body.image,
    image: port + "/uploads/" + req.file.filename,
    description: req.body.description,
    price: req.body.price,
    offerPrice: req.body.offerPrice,
    isAvailable: req.body.isAvailable,
    isTodayOffer: req.body.isTodayOffer,
    category: req.body.category,
    subcategory: req.body.subcategory,
    isAdmin: req.body.isAdmin,
    recordDate: req.body.recordDate,
    updateDate: req.body.updateDate
  });
  let data = await newproduct.save();
  res.send({ message: "product addess successfully", d: data });
});

//fetch product

router.get("/fetchproduct", async (req, res) => {
  let data = await Product.find();
  //let data = await Product.find({ category: "req.params.name" });
  res.send({ d: data });
});
// router.get("/fetchproducts/:category", async (req, res) => {
//   let data = await Product.find({ category: "electronics" });
//   console.log(data);

//   res.send({ d: data });
// });

router.get("/fetchproducts/:category", async (req, res) => {
  let data = await Product.find({ category: req.params.category });
  console.log(data);

  res.send({ d: data });
});

// router.get("/fetchproduct/:category", async (req, res) => {
//   let product = await Product.find();
//   if (!product) {
//     return res.status(404).send({ message: "Invalid product Id" });
//   }
//   res.send({ message: "product get", data: product });
// });

//Fetch product by id

router.get("/fetchproduct/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).send({ message: "Invalid product Id" });
  }
  res.send({ message: "product get", data: product });
});

//delete
router.delete("/deleteproduct/:id", async (req, res) => {
  let product = await Product.findByIdAndRemove(req.params.id);
  if (!product) {
    return res.status(403).send({ message: "invalid id" });
  }
  res.send({ message: "delete successfully" });
});

router.put("/updateproduct/:id", uploads.single("image"), async (req, res) => {
  // let product = await Product.findById(req.params.id);
  // let product = await Product.findById(req.params.id);
  let product = await Product.findByIdAndUpdate(req.params.id, req.body);
  console.log(product);
  if (!product) {
    return res.status(404).send({ message: "Invalid id" });
  }
  // @ts-ignore

  product.name = req.body.name;
  product.image = port + "/uploads/" + req.file.filename;
  console.log(product);

  let data = await product.save();
  res.send({ message: "data updated", d: data });
});

module.exports = router;
