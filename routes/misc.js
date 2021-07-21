const express = require('express');
const router = express.Router();
const miscController = require("../controllers/misc/controller")

router.get("/", miscController.getAll)
    //router.get("/pushMisc", miscController.pushMisc)
router.get("/:query", miscController.getOne)


module.exports = router;