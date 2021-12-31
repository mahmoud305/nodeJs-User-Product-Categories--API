const { checkCategoryExist } = require("../../Category/Controller/category.Controller");
const { checkuserExist } = require("../../Users/Controller/user.controller");
const Product = require("../Model/product.model");
/***
 *  prodId , pordName , prodTitle , prodDescribtion , prodPrice
 * createdBy ,categoryId
 */
const addProduct=async (req,res)=>{
  const {prodId , pordName , prodTitle , prodDescribtion , prodPrice ,userId, categoryId}= req.body;
    try {
        await Product.create({prodId , pordName , prodTitle , prodDescribtion , prodPrice ,userId, categoryId});
        res.json({message:"success"});
    } catch (error) {
        res.json({message:"failed"});
    }

}
const checkProductExist= (id)=>{
    return new Promise ( async function(x){
        try {
            let product = await Product.findAll({where:{prodId:id} });
            if(product.length>0)
                x(true);
        } catch (error) {
            console.log("error :\n"+ error);
        }
    x(false);
    } 
    )
}

const deleteProduct = async (req,res)=>{
    let {id}=req.params;
    let check = await checkProductExist(id);
    if(!check){
        res.json({message:"failed",error:"product doesnot exist to be deleted."});
        return;
    }
    try {
        await Product.destroy({where:{prodId:id}});
        res.json({message:"success"});
    } catch (error) {
        res.json({message:"failed"});
    }
}

const editProduct= async(req,res)=>{
    let {id}=req.params;
    let {prodTitle , prodDescribtion , prodPrice , categoryId}=req.body;
    let checkProduct= await checkProductExist(id);
    let checkCategory= await checkCategoryExist(categoryId);
    if(!checkProduct){
        res.json({message:"failed",error:"Product doesnot exist to be updated."});
        return;
    }
    if(!checkCategory){
        res.json({message:"failed",error:"This Category doesnot exist."});
        return;    
    }
try {
    await Product.update({prodTitle , prodDescribtion , prodPrice , categoryId},{where:{prodId:id}});
    res.json({message:"success"});
} catch (error) {
    res.json({message:"failed",error});
}

}


const getProductsByCategory=async (req, res)=>{
    let {id}= req.params;
    let checkCategory=await checkCategoryExist(id);
    if(!checkCategory){
        res.json({message:"failed",error:"This Category doesnot Exist"});
        return;
    }
    try {
        let products = await Product.findAll({where:{categoryId:id}});
        res.json({message:"success",data:products});
    } catch (error) {
        res.json({message:"failed",error});
    }
}


const getProductsOfUser=async (req, res)=>{
    let {id ,Uid}= req.params;
    let checkCategory=await checkCategoryExist(id);
    if(!checkCategory){
        res.json({message:"failed",error:"This Category doesnot Exist"});
        return;
    }
    let checkUser= await checkuserExist(Uid);
    if(!checkUser){
        res.json({message:"failed",error:"this User doesnot exist"});
        return;
    }
    try {
        let products = await Product.findAll({where:{categoryId:id,userId:Uid}});
        res.json({message:"success",data:products});
    } catch (error) {
        res.json({message:"failed",error});
    }
}
module.exports={addProduct ,deleteProduct,editProduct,getProductsByCategory,getProductsOfUser};