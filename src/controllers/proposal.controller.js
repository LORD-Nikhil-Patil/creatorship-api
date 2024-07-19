const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { proposalService } = require("../services");

const createProposal = catchAsync(async (req, res) => {
  const proposal = await proposalService.createProposal(req.body);
  res.status(httpStatus.CREATED).send(proposal);
});

const getProposal = catchAsync(async (req, res) => {
  const proposal = await proposalService.findProposal(req.body.id);
  res.send(proposal);
});

module.exports = {
  createProposal,
  getProposal,
};