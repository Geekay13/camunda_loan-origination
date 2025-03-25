const express = require("express");
const router = express.Router();
const { postDeploy } = require("../controllers/processController");

// Define the "/postdeploy" route
router.post("/postdeploy", postDeploy);

module.exports = router;
