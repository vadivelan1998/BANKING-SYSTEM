const mongoose = require("mongoose");

const fixedAccountSchema = mongoose.Schema(
  {
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: String, required: true },
    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true },
    masterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "master",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Fixed = mongoose.model("fixed", fixedAccountSchema);
module.exports = Fixed;
