const mongoose=require("mongoose")

const userSchema = mongoose.Schema(
{
    
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: false, default: "female" },
  type: { type: String, required: true }
},
{
  timestamps:true,
  versionKey:false
}

);
const User=mongoose.model("user",userSchema)
module.exports=User