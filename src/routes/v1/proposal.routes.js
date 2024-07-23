const express = require("express");
const { proposalController } = require("../../controllers/index");

const router = express.Router();

router
  .route("/")
  .post(proposalController.createProposal)
  .get(proposalController.getProposals);

router.route("/get").post(proposalController.getProposal);

module.exports = router;
