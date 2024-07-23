const httpStatus = require("http-status");
const mongoose = require("mongoose");
const _ = require("lodash");
const { Proposal } = require("../models");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");

const findProposal = async (id) => {
  const Id = new mongoose.Types.ObjectId(id);
  const proposal = await Proposal.findOne({ _id: Id })
    .populate({
      path: "application",
      populate: {
        path: "userId",
        model: "User",
      },
    })
    .exec();

  if (!proposal) {
    throw new ApiError(httpStatus.NOT_FOUND, "Proposal not found");
  }
  return proposal;
};

const createProposal = async (data) => {
  const newProposal = await Proposal.create(data);

  if (!_.isEmpty(data.userId)) {
    const user = await User.findById(data.userId);
    const proposalIdStr = newProposal.id.toString();
    const proposalExists = user.proposals.some(
      (proposal) => proposal.toString() === proposalIdStr
    );
    const isProposal = await findProposal(proposalIdStr);
    if (!isProposal) {
      throw new Error("Proposal not found");
    }

    if (!proposalExists) {
      await User.findByIdAndUpdate(
        user._id,
        { $push: { proposals: proposalIdStr } },
        { new: true, runValidators: true, useFindAndModify: false }
      );
    }
  }

  return newProposal;
};



const queryProposals = async () => {
  const proposals = await Proposal.find();
  return proposals;
};

module.exports = {
  createProposal,
  findProposal,
  queryProposals,
};
