const LoanApplication = require("../model/loanApplicationForm");
const LoanInformation = require("../model/loanInformation");
const {startProcess} = require("./../services/workers.js");

exports.handleLoanApplication = async (req, res) => {
  try {
    const { first_name, last_name, address, contact, pi, loan } = req.body;
    console.log("Received Data:", req.body);
    const processVariable = req.body;

    // Check if user exists by SSN
    let existingUser = await LoanApplication.findOne({ "pi.ssn": pi.ssn });

    if (!existingUser) {
      // Create a new LoanApplication (without loan)
      existingUser = new LoanApplication({
        first_name,
        last_name,
        address,
        contact,
        pi,
        loan
      });

      await existingUser.save();
    }

    // Validate loan details before saving
    if (!loan || loan.amount === undefined || loan.tenure === undefined) {
      return res.status(400).json({ error: "Loan amount and tenure are required" });
    }

    // Save loan details separately in LoanInformation
    const newLoan = new LoanInformation({
      ssn: pi.ssn, // Link to existing user
      amount: loan.amount,
      tenure: loan.tenure
    });

    await newLoan.save();
    await startProcess(processVariable);

    res.status(201).json({ message: "Loan application saved successfully!" });
  } catch (error) {
    console.error("Error saving loan application:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
