const mongoose = require("mongoose");
const { Application } = require("../models");
const { Proposal } = require("../models");

const createApplication = async (data) => {
  const { proposalId, ...proposal } = data;
  const newApplication = await Application.create(proposal);
  const objectId = mongoose.Types.ObjectId(proposalId);
  await Proposal.findByIdAndUpdate(
    objectId,
    { $push: { application: newApplication.id } },
    { new: true, runValidators: true }
  );
  return newApplication;
};

module.exports = {
  createApplication,
};
