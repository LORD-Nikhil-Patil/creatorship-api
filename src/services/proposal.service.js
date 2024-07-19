const httpStatus = require("http-status");
const { ObjectId } = require("mongodb");
const { Proposal } = require("../models");
const ApiError = require("../utils/ApiError");

const createProposal = async (proposal) => {
  return Proposal.create(proposal);
};

const findProposal = async (id) => {
  const Id = ObjectId(id);
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
