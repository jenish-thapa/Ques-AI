const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const dbConfig = require("./config/dbConfig");
const userRoutes = require("./Routes/userRoutes");
const projectRoutes = require("./Routes/projectRoutes");
const transcriptRoutes = require("./Routes/transcriptRoutes");

const app = express();

const allowedOrigins = [
  "https://ques-8i1v59zbp-jenishs-projects-2d020864.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/transcripts", transcriptRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
