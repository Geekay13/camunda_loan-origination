const express = require("express");
const router = express.Router();
const {handleLoanApplication} = require("../controllers/loanController");

// Endpoint to handle form submission from Camunda
router.post("/apply-loan", handleLoanApplication);

module.exports = router;
