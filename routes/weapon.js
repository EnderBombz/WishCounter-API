const express = require('express');
const router = express.Router();
const weaponController = require("./../controllers/weapon/controller")

router.get("/", weaponController.getAll)
router.get("/:query", weaponController.getOne)
    //router.get("/pushItens", weaponController.pushToDB)

module.exports = router;