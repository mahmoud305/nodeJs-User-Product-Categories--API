 
const { getAllCategories ,createCatogry, deleteCategory, editCategory} = require("../Controller/category.Controller");

const categoryRouter = require("express").Router();

categoryRouter.get("/getAllCategories", getAllCategories);
categoryRouter.post("/addCategory",createCatogry);
categoryRouter.delete("/deleteCategory/:id",deleteCategory );
categoryRouter.put("/updateCategory/:id",editCategory );
module.exports=categoryRouter;