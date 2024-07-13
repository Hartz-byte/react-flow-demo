const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

router.post("/", userController.register);

router.get("/", userController.get);

module.exports = router;
