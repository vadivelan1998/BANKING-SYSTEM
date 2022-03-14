const express=require("express")
const app=express()


const userController=require("./controllers/user.controller")
const masterController = require("./controllers/masterAccount.controller");
app.use(express.json())


app.use("/users", userController);
app.use("/masters",masterController)

module.exports=app
