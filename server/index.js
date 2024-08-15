const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dbConfig = require("./config/dbConfig");
const userRoutes = require("./Routes/userRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
