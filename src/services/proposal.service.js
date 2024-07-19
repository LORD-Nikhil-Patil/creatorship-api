const httpStatus = require("http-status");
const mongoose = require("mongoose");
const { Proposal } = require("../models");
const ApiError = require("../utils/ApiError");

const createProposal = async (proposal) => {
  return Proposal.create(proposal);
};

const findProposal = async (id) => {
  const Id = new mongoose.Types.ObjectId(id);
  const proposal = Proposal.findOne({ _id: Id });

  if (!proposal) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return proposal;
};

module.exports = {
  createProposal,
  findProposal,
};
