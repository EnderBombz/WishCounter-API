const express = require('express');
const router = express.Router();
const tierController = require("../controllers/tier/controller")

router.get("/:tier", tierController.getTier)
    //router.get("/pushTiers", tierController.pushTiers)

module.exports = router;