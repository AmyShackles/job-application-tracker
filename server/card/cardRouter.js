const express = require("express");
const db = require("mongoose");
const router = express.Router();

const sendUserError = (status, message, res) => {
  res.status(status).json({ error: message });
  return;
};

router.route("/").get((req, res) => {
  res.send("This is a card route");
});

module.exports = router;
