const mongoose = require("mongoose");

const savingAccountSchema = mongoose.Schema(
  {
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: String, required: true },
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
const Saving = mongoose.model("saving", savingAccountSchema);
module.exports = Saving;
