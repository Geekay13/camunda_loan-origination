const mongoose = require("mongoose");

const LoanInformationSchema = new mongoose.Schema({
  ssn: { type: String, required: true, ref: "LoanApplication" }, // Reference to main user (LoanApplication)
  amount: { type: Number, required: true },
  tenure: { type: Number, required: true, min: 24, max: 48 },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("LoanInformation", LoanInformationSchema);
