const { Router } = require("express");
const User = require("../models/userModel");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const usernameExists = await User.findOne({ usrname: req.body.usrname });
    if (usernameExists) {
      return res.send({
        success: false,
        message: "The usrname already exists!",
      });
    }
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
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
      return res.send(result);
    }

    const oneDayInSeconds = 24 * 60 * 60;

    res.send({
      success: true,
      message: "User logged in successfully!",
      token: result.message,
    });
  } catch (error) {
    console.error("Error in login route:", error);
    res.send({ success: false, message: "Server error" });
  }
});

router.get("/get-current-user", authMiddleware, async (req, res) => {
  const user = await User.findById(req.body.userId).select("-password -salt");

  res.send({
    success: true,
    message: "You are authorized to go to the protected route!",
    data: user,
  });
});

module.exports = router;
