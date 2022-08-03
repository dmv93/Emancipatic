const router = require("express").Router();

const user = require("../controllers/user.controllers");

// router.get("/",user.home)
router.post("/registroAlumno", user.registroAlumno);
router.post("/registroFormador", user.registroFormador);
router.post("/login", user.login);
router.post("/loginFormador", user.loginFormador);
router.post("/interes", user.interesAlumno);
router.post("/informacionAlumno", user.informacionAlumno);
router.post("/nombreFormador", user.nombreFormador);
router.post("/asignaturasFormador", user.asignaturasFormador);
router.post("/valoracionFormador", user.valoracionFormador);
router.post("/asignaturasValoracion", user.asignaturasValoracion);
router.post("/informacionProfesor", user.informacionProfesor);
router.post("/tusAlumnos", user.tusAlumnos);
router.post("/asignaturasAlumno", user.asignaturasAlumno);


module.exports = router;