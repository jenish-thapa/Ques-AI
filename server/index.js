const express = require("express");

require("dotenv").config();

const dbConfig = require("./config/dbConfig");

const app = express();

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
