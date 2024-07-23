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
    application: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
    },
  },
  {
    timestamps: true,
    collection: "proposals",
  }
);

proposalSchema.plugin(toJSON);
proposalSchema.plugin(paginate);

const Proposal = mongoose.model("Proposal", proposalSchema);

module.exports = Proposal;
