const UserRouter = require("express").Router();
const { getAllUsers ,AddUser,getUserById, editUser ,deleteUser} = require("../Controller/user.controller");

UserRouter.get("/getAllUsers",getAllUsers);
UserRouter.get("/getUserById/:id",getUserById);
UserRouter.post("/addUser",AddUser);
UserRouter.put("/updateUser/:id",editUser);
UserRouter.delete("/deleteUser/:id",deleteUser)


module.exports=UserRouter;