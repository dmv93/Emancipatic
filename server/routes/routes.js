const router = require("express").Router();

const user = require("../controllers/user.controllers");

// router.get("/",user.home)
router.post("/registroAlumno", user.registroAlumno);
router.post("/registroFormador", user.registroFormador);
router.post("/login", user.login);
router.post("/loginFormador", user.loginFormador);

module.exports = router;