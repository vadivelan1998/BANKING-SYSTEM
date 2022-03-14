const mongoose = require("mongoose");
const connect=require("./configs/db")
const app=require("./index")

app.listen(6000,async()=>{
    await connect()
    console.log("listening on port 6000")
})