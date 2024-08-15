const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const userSchema = new mongoose.Schema(
  {
    usrname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static("matchPassword", async function (email, password) {
  try {
    const user = await this.findOne({ email: email });
    if (!user) {
      return { success: false, message: "Incorrect email!" };
    }

    const { salt, password: hashedPassword } = user;
    const userProvidedHash = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashedPassword !== userProvidedHash) {
      return { success: false, message: "Incorrect password!" };
    }

    return { success: true, message: "User logged in successfully!" };
  } catch (error) {
    console.error("Error in matchPassword:", error);
    return { success: false, message: "An error occurred during authentication" };
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
