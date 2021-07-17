const express = require('express');
const router = express.Router();
const pieceController = require("../controllers/piece/controller")

router.get("/", pieceController.getAll)
router.get("/:query", pieceController.getOne)
    //router.get("/pushItens", pieceController.pushToDB)

module.exports = router;