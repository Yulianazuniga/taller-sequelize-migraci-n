const express = require("express");
const router = express.Router();
const controllerBlock = require ('../controller/controllerBlock');

router.get('/blocks',controllerBlock.listarBlock);

module.exports = router;

