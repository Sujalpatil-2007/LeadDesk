const express = require("express");
const router = express.Router();

const {
  loginAdmin,
  getMe,
  logoutAdmin,
} = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

// Public Route
router.post("/login", loginAdmin);

// Protected Routes
router.get("/me", authMiddleware, getMe);
router.post("/logout", authMiddleware, logoutAdmin);

module.exports = router;
