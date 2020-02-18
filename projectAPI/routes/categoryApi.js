let express = require("express");
let router = express.Router();
let Category = require("../dbModel/categoryModel");


router.post("/subcategory",async (req,res)=>
{
    let subcategory = new Category.subCategory({
        name:req.body.name

    });
    let data =  await subcategory.save();
    res.send({message:"subcategory addedd successfully",d:data})
})

router.post("/category", async (req,res)=>
{
    let C = await Category.subCategory.findById(req.body.subCategoryId);
    if(!C)
    {
        return res.status(403).send({ message: "invalid id" }) ;

    }

      let category = new Category.category({
        categoryName:req.body.categoryName,
        subCategory:
        {
            _id:C._id,
            // @ts-ignore
            name:C.name}
        });
        let data = await category.save();
        res.send({message:"category addedd successfully",d:data})


})
module.exports=router;