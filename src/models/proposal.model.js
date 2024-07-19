const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const proposalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    proposal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  { collection: "proposal" }
);

proposalSchema.plugin(toJSON);

const Proposal = mongoose.model("Proposal", proposalSchema);

module.exports = Proposal;
