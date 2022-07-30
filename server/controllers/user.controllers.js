

const mongo = require('mongodb');
const url = "mongodb+srv://root:root@cluster0.njigkts.mongodb.net/test";
const MongoClient = mongo.MongoClient;
const mydb = "Emancipatic";



const user = {
    registroAlumno: (req, res) => {
        console.log(req.body)

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            dbo.collection("Alumnos").findOne({ dni: req.body.dni }, async function (err, result) {
                if (err) throw err;

                if (result == null) {
                    const myobj = { "nombre": req.body.nombre, "apellidos": req.body.apellidos, "email": req.body.email, "telefono": req.body.telefono, "dni": req.body.dni, "codpostal": req.body.codpostal, "poblacion": req.body.poblacion, "provincia": req.body.provincia };
                    dbo.collection("Alumnos").insertOne(myobj, async function (err, result1) {
                        if (err) throw err;
                        console.log("Alumno insertado")
                        res.json({
                            data: result1,
                            message: 'bien'
                        })

                    });
                } else {
                    res.json({

                        message: 'mal'
                    })
                }


            });
        });
    },

    registroFormador: (req, res) => {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            const { nombre, apellidos, email, telefono, dni, codpostal, poblacion, provincia } = req.body

            if (nombre.match(/^[A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$/) && apellidos.match(/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/) && email.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/) && telefono.match(/[0-9]{9}/) && dni.match(/^[0-9]{8})([-]?)([A-Za-z]{1})$/) && codpostal.match(/[0-9]{5}/) && poblacion.match(/^[A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$/) && provincia.match(/^[A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$/)) {
                dbo.collection("Formadores").findOne({ dni: req.body.dni }, async function (err, result) {
                    if (err) throw err;

                    if (result == null) {
                        const myobj = { "nombre": req.body.nombre, "apellidos": req.body.apellidos, "email": req.body.email, "telefono": req.body.telefono, "dni": req.body.dni, "codpostal": req.body.codpostal, "poblacion": req.body.poblacion, "provincia": req.body.provincia, "asignaturas": [await req.body.red1, await req.body.red2, await req.body.red3, await req.body.red4, await req.body.red5, await req.body.red6] };
                        dbo.collection("Formadores").insertOne(myobj, async function (err, result1) {
                            if (err) throw err;
                            console.log("Formador insertado")
                            res.json({
                                data: result1,
                                message: 'bien'
                            })

                        });
                    } else {
                        res.json({

                            message: 'mal'
                        })
                    }


                });
            } else {
                res.json({

                    message: 'mal'
                })
            }


        });
    },

    login: (req, res) => {
        console.log(req.body)
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);

            const myobj = { "telefono": req.body.telefono, "dni": req.body.password }

            // dbo.collection("Formadores").findOne(myobj, async function (err, result) {
            //     if (err) throw err
            //     console.log("Usuario autenticado")
            //     res.json({
            //         data:result,
            //         message: true
            //     })
            // });
            dbo.collection("Alumnos").findOne(myobj, async function (err, result) {
                if (err) throw err
                console.log("Alumno autenticado")
                res.json({
                    data: result,
                    message: true
                })
            });
        })
    },

    loginFormador: (req, res) => {
        console.log(req.body)
        MongoClient.connect(url, function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);

            const myobj = { "telefono": req.body.telefono, "dni": req.body.password }

            dbo.collection("Formadores").findOne(myobj, async function (err, result) {
                if (err) throw err
                console.log("Usuario autenticado")
                res.json({
                    data: result,
                    message: true
                })
            });
            // dbo.collection("Alumnos").findOne(myobj, async function (err, result) {
            //     if (err) throw err
            //     console.log("Alumno autenticado")
            //     res.json({
            //         data: result,
            //         message: true
            //     })
            // });
        })
    }
};

module.exports = user;