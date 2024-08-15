const { Router } = require("express");
const User = require("../models/userModel");

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    let userExists = await User.findOne({ ursname: req.body.ursname });
    if (userExists) {
      return res.send({
        success: false,
        message: "The usrname already exists!",
      });
    }
    userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "The email already exists!",
      });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "You've successfully signed up, please login now!",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.matchPassword(email, password);

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error in login route:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
