const mongoose = require("mongoose");

const transcriptSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Transcript = mongoose.model("transcript", transcriptSchema);

module.exports = Transcript;
