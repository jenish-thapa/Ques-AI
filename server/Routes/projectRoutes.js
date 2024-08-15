const { Router } = require("express");
const Project = require("../models/projectModel");

const router = Router();

router.post("/project", async (req, res) => {
  try {
    const newProject = new Project({ ...req.body, createdBy: req.user._id });
    await newProject.save();

    res.send({
      success: true,
      message: "Project successfully created!",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
