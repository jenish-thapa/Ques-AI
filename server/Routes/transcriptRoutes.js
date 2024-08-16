const { Router } = require("express");
const Transcript = require("../models/transcriptModel");
const Project = require("../models/projectModel");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newTranscript = new Transcript(req.body);

    const updatedProject = await Project.findByIdAndUpdate(
      req.body.projectId,
      { $inc: { noOfEpisodes: 1 } },
      { new: true }
    );

    if (!updatedProject) {
      return res.send({ success: false, message: "Project not found!" });
    }

    await newTranscript.save();

    res.send({
      success: true,
      message: "Transcript successfully created!",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const transcripts = await Transcript.find({
      projectId: req.query.projectId,
    });

    res.send({
      success: true,
      message: transcripts,
    });
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
