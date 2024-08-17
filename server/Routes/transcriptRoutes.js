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

router.delete("/:id", async (req, res) => {
  try {
    const transcriptId = req.params.id;

    const transcript = await Transcript.findByIdAndDelete(transcriptId);

    if (!transcript) {
      return res
        .status(404)
        .send({ success: false, message: "Transcript not found!" });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      transcript.projectId,
      { $inc: { noOfEpisodes: -1 } },
      { new: true }
    );

    if (!updatedProject) {
      return res
        .status(404)
        .send({ success: false, message: "Project not found!" });
    }

    res.send({
      success: true,
      message: "Transcript successfully deleted!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Server error" });
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
