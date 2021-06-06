const express = require("express");
const router = express.Router();

//
const meController = require("../app/controllers/MeController.js");

router.get("/stored/policy", meController.storedPolicy);
router.get("/stored/courses", meController.storedCourses);
router.get("/stored/members", meController.storedMembers);
module.exports = router;
