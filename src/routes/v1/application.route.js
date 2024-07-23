const express = require("express");
const { applicationController } = require("../../controllers/index");

const router = express.Router();

router.route("/").post(applicationController.createApplication);

module.exports = router;
