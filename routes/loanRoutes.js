const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");

// Endpoint to handle form submission from Camunda
router.post("/apply-loan", loanController.handleLoanApplication);

module.exports = router;
