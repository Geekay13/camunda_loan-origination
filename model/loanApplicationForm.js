const mongoose = require("mongoose");

const LoanApplicationSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  
  address: {
    address_1: { type: String, required: true },
    address_2: { type: String },
    city: { type: String, required: true },
    zip_code: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
  },

  contact: {
    email: { type: String, required: true },
    phone: { type: String },
    mobile: { type: String }
  },

  pi: { // Personal Information
    ssn: { type: String, required: true, unique: true },
    date_of_birth: { type: Date, required: true },
    annual_salary: { type: Number, required: true },
    current_employer: { type: String, required: true }
  },

  loan: { // Loan Information
    amount: { type: Number, required: true },
    tenure: { type: Number, required: true, min: 24, max: 48 }
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("LoanApplication", LoanApplicationSchema);
