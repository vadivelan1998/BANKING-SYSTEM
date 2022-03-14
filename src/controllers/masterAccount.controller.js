const express = require("express");
const Master = require("../models/master.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const master = await Master.find().lean().exec();
    res.status(200).send(master);
  } catch (error) {
    console.log(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const master = await Master.create(req.body);
    res.status(200).send(master);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
