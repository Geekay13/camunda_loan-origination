const express = require("express");
const router = express.Router();
const { postDeploy, triggerMessage } = require("../controllers/processController");

// Define the "/postdeploy" route
router.post("/postdeploy", postDeploy);
router.post("/triggerMessage", triggerMessage);


module.exports = router;
