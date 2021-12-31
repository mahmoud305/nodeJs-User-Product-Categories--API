const productRouter= require("express").Router();
const { addProduct, deleteProduct, editProduct ,getProductsByCategory, getProductsOfUser} = require("../Controller/product.Controller");


productRouter.post("/addProduct" ,addProduct);
productRouter.delete("/deleteProduct/:id",deleteProduct);
productRouter.put("/updateProduct/:id",editProduct);
productRouter.get("/getProductsByCategoryId/:id",getProductsByCategory);
productRouter.get("/getProductsOfUser/:Uid/:id",getProductsOfUser);

module.exports=productRouter;
