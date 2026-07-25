const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
} = require("../controllers/lead.controller");

// Public
router.post("/", createLead);

// Protected
router.get("/", authMiddleware, getAllLeads);
router.get("/:id", authMiddleware, getLeadById);
router.patch("/:id/status", authMiddleware, updateLeadStatus);
router.delete("/:id", authMiddleware, deleteLead);

module.exports = router;