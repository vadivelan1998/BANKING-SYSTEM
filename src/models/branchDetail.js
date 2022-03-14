
const mongoose = require("mongoose");

const branchDetailsSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Branch = mongoose.model("branch", branchDetailsSchema);
module.exports = Branch;
