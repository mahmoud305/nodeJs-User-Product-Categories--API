 
const User = require("../Model/user.model");

async function getAllUsers(req,res){
    
    try {
        let users= await User.findAll();
        res.json({message:"success",data:users});
    } catch (error) {
        res.json({message:"failed"});
    }
}

const AddUser= async(req,res)=>{
    const {fname,email,phone,password}=req.body;
    try {
        await User.create({fname,email,phone,password});
        res.json({message:"success"});
    } catch (error) {
        res.json({message:"failed",data:error});
    }

}
async function getUserById(req,res){
    const {id}=req.params;

    let check=await checkuserExist(id);
    if(check==false ){
        console.log("user does not exist");
        res.json({message:"failed" ,error:"user doesnot exist "});
    return;
    }
    else{ 
    try {
        let user =await User.findOne({
            where:{ id }
        });
        res.json({message:"success",data:user});
    } catch (error) {
        res.json({message:"failed",data:error});
    }
}
}
function checkuserExist(id){
    return new Promise ( async function (x){
            try {
        let user= await User.findAll({ where:{id} });
        console.log(user.length);
        // console.log("hello from Check");
        if(user.length>0){
            // console.log("return true");
            x(true);
            // return true;
        }
        // else console.log("empty array");
        } catch (error) {
            console.log("USER DOESNOT EXIST\n"+ error);            
    }
    // return false;
    x(false);
    } )

}
const editUser=async (req,res)=>{
let {fname,phone}=req.body;
let {id}=req.params;
let check=await checkuserExist(id);
console.log("Check Is");
console.log(check);
if(check==false ){
    console.log("user does not exist");
    res.json({message:"failed" ,error:"user doesnot exist to be updated"});
    return;
}
else{
    try {
        await User.update( {fname,phone},{
            where:{id}
        });
        res.json({message:"success"})
    } catch (error) {
        res.json({message:"failed",data:error});
    }
}
}

const deleteUser=async (req,res)=>{
    let {id}= req.params;
    console.log("before Check");
    if(!checkuserExist(id)){
        console.log("user does not exist");
        res.json({message:"failed" ,error:"user doesnot exist to be deleted"});
        return;
    }
    try {
        await User.destroy({where:{id}});
        res.json({message:"success"})
    } catch (error) {
        res.json({message:"failed",data:error});
    }
}

module.exports={getAllUsers ,AddUser ,getUserById,editUser, deleteUser ,checkuserExist}


// why userCheck doesnot Work 