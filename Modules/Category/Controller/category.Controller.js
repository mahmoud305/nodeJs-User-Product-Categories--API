const Category = require("../Model/category.Model");

const getAllCategories= async (req,res)=>{
    try {
        let categories= await Category.findAll();
        res.json({message:"success",data:categories});
    } catch (error) {
        res.json({message:"failed",error})
    }
}
 
const createCatogry= async (req,res)=>{
    const { describtion ,title}=req.body;
    try {
        await Category.create({title,describtion});
        res.json({message:"success"});
    } catch (error) {
        res.json({message:"failed",error});
    }
}

const checkCategoryExist= (id)=>{
    return new Promise( async function (x){
        try {
            let category = await Category.findAll({ where :{id} });
            if(category.length>0){
                x(true);
            } 
        } catch (error) {
            console.log("error :\n"+error);
        }
    x(false);
    } )
}

const deleteCategory=async(req,res)=>{
    let {id}=req.params;
    let check =await checkCategoryExist(id)
    if(!check){
        res.json({message:"Failed",error:"Category Doesnot Exist to be deleted"})
        return;
    }
    try {
        await Category.destroy({ where:{ id }});
        res.json({message:"success"});
    } catch (error) {
        res.json({message:"failed",error});
    }
}


const editCategory=async(req,res)=>{
    let {id}= req.params;
    let {title,describtion}=req.body;
    let check =await checkCategoryExist(id)
    if(!check){
        res.json({message:"Failed",error:"Category Doesnot Exist to be Edited"})
        return;
    }
    try {
        await Category.update({title,describtion},{where:{id}});
        res.json({message:"success"});
    } catch (error) {
        res.json({message:"failed",error});
    }
}
module.exports={getAllCategories,createCatogry ,deleteCategory,editCategory ,checkCategoryExist}