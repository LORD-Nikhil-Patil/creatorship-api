const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

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
proposalSchema.plugin(paginate);

const Proposal = mongoose.model("Proposal", proposalSchema);

module.exports = Proposal;
