const router = require("express").Router();

const user = require("../controllers/user.controllers");

// router.get("/",user.home)
router.post("/login", user.login);

module.exports = router;