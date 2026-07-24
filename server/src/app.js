const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const authRoutes = require("../src/routes/auth.routes")

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use("/api/auth",authRoutes);

module.exports = app;
