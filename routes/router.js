const express = require('express');
const router = express.Router();

const character = require("./character");
const weapon = require("./weapon")
const piece = require("./piece")
const tier = require("./tier")

router.use("/character", character)
router.use("/weapon", weapon);
router.use("/piece", piece)
router.use("/tier", tier)

module.exports = router;