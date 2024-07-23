const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const applicationSchema = mongoose.Schema(
  {
    proposal: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "applications",
  }
);

applicationSchema.plugin(toJSON);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
