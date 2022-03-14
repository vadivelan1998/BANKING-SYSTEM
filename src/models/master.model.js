const mongoose = require("mongoose");

const masterAccountSchema = mongoose.Schema(
  {
    
    balance: { type: Number, required: true },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true},
    branchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        required:true}
  },
  
 
  {
    timestamps: true,
    versionKey: false,
  }
);
const Master = mongoose.model("master",masterAccountSchema);
module.exports = Master;
