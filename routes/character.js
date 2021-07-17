const express = require('express');
const router = express.Router();
const characterController = require("../controllers/character/controller")

router.get("/", characterController.getAll)
router.get("/:query", characterController.getOne)
    //router.get("/pushItens", characterController.pushToDB)

module.exports = router;