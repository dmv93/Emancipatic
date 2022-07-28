const router = require("express").Router();

const user = require("../controllers/user.controllers");

// router.get("/",user.home)
router.post("/registroAlumno", user.registroAlumno);
router.post("/registroFormador", user.registroFormador);

module.exports = router;