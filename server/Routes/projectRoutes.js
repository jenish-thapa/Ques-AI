const { Router } = require("express");
const Project = require("../models/projectModel");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();

    res.send({
      success: true,
      message: "Project successfully created!",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.params.id });

    res.send({
      success: true,
      message: projects,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
