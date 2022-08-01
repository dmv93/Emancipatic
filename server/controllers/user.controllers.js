const { compare } = require('bcryptjs');
const mongo = require('mongodb');
const url = "mongodb+srv://root:root@cluster0.njigkts.mongodb.net/test";
const MongoClient = mongo.MongoClient;
const mydb = "Emancipatic";
const { encrypt } = require('../helpers/handleByCript');

const functions = require("../functions/functions.js");

const user = {
    registroAlumno: (req, res) => {
        console.log(req.body)

        MongoClient.connect(url, async function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            const { nombre, apellidos, email, telefono, dni, codpostal, poblacion, provincia } = req.body
            console.log("REVISAR1")

            if (nombre.match(/^([a-zA-Z]{1,}\s?){1,6}$/) && apellidos.match(/^([a-zA-Z]{1,}\s?){1,6}$/) && email.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/) && telefono.match(/[0-9]{9}/) && dni.match(/^[0-9]{8,8}[A-Za-z]$/) && codpostal.match(/[0-9]{5}/) && poblacion.match(/^([a-zA-Z]{1,}\s?){1,6}$/) && provincia.match(/^([a-zA-Z]{1,}\s?){1,6}$/)) {
                dbo.collection("Alumnos").findOne({ dni: dni }, async function (err, result) {
                    if (err) throw err;
                    console.log("REVISAR")
                    if (result == null) {
                        const myobj = { "nombre": req.body.nombre, "apellidos": req.body.apellidos, "email": req.body.email, "telefono": req.body.telefono, "dni": functions.SHA1(req.body.dni), "codpostal": req.body.codpostal, "poblacion": req.body.poblacion, "provincia": req.body.provincia };
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
            } else {
                res.json({

                    message: 'mal'
                })
            }


        });
    },

    registroFormador: (req, res) => {

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            const { nombre, apellidos, email, telefono, dni, codpostal, poblacion, provincia } = req.body


            const array = ['bien', 'bien', 'bien', 'bien', 'bien', 'bien', 'bien', 'bien']
            console.log(!poblacion.match(/^[A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']?$/))

            if (nombre.match(/^([a-zA-Z]{1,}\s?){1,6}$/) && apellidos.match(/^([a-zA-Z]{1,}\s?){1,6}$/) && email.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/) && telefono.match(/[0-9]{9}/) && dni.match(/^[0-9]{8,8}[A-Za-z]$/) && codpostal.match(/[0-9]{5}/) && poblacion.match(/^([a-zA-Z]{1,}\s?){1,6}$/) && provincia.match(/^([a-zA-Z]{1,}\s?){1,6}$/)) {
                console.log('hola')
                dbo.collection("Formadores").findOne({ dni: functions.SHA1(req.body.dni) }, async function (err, result) {
                    if (err) throw err;

                    if (result == null) {
                        const myobj = { "nombre": req.body.nombre, "apellidos": req.body.apellidos, "email": req.body.email, "telefono": req.body.telefono, "dni": functions.SHA1(req.body.dni), "codpostal": req.body.codpostal, "poblacion": req.body.poblacion, "provincia": req.body.provincia, "asignaturas": [await req.body.red1, await req.body.red2, await req.body.red3, await req.body.red4, await req.body.red5, await req.body.red6] };
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
                if (!nombre.match(/^([a-zA-Z]{1,}\s?){1,6}$/)) {
                    array[0] = 'mal'
                }
                if (!apellidos.match(/^([a-zA-Z]{1,}\s?){1,6}$/)) {
                    array[1] = 'mal'
                }
                if (!email.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/)) {
                    array[2] = 'mal'
                }
                if (!telefono.match(/[0-9]{9}/)) {
                    array[3] = 'mal'
                }
                if (!dni.match(/^[0-9]{8,8}[A-Za-z]$/)) {
                    array[4] = 'mal'
                }
                if (!codpostal.match(/[0-9]{5}/)) {
                    array[5] = 'mal'
                }
                if (!poblacion.match(/^([a-zA-Z]{1,}\s?){1,6}$/)) {
                    array[6] = 'mal'
                }
                if (!provincia.match(/^([a-zA-Z]{1,}\s?){1,6}$/)) {
                    array[7] = 'mal'
                }
                res.json({
                    test: array
                })
            }







        });
    },

    login: (req, res) => {
        console.log(req.body)
        MongoClient.connect(url, async function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);

            const myobj = { "telefono": req.body.telefono }
            console.log(myobj)
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
                console.log(result)
                console.log(functions.SHA1(req.body.dni))
                if (result.dni == functions.SHA1(req.body.dni)) {
                    console.log("Alumno autenticado")
                    res.json({
                        data: result,
                        message: true
                    })
                }





            });
        })
    },

    loginFormador: (req, res) => {
        console.log(req.body)
        MongoClient.connect(url, async function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);




            const myobj = { "telefono": req.body.telefono }

            dbo.collection("Formadores").findOne(myobj, async function (err, result) {
                if (err) throw err
                if (result.dni == functions.SHA1(req.body.dni)) {
                    console.log("Formador autenticado")
                    res.json({
                        data: result,
                        message: true
                    })
                }





            });
        })
    },

    informacionAlumno: (req, res) => {
        MongoClient.connect(url, async function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);

            const myobj = { telefono: (req.body.telefono).toString() }
            dbo.collection("Alumnos").findOne(myobj, async function (err, result) {
                if (err) throw err
                console.log(result)
                // if (condition) {
                //     Formadores
                // }
                if (result != null) {
                    res.json({
                        data: result.nombre,
                        message: true
                    })
                }
            });
        })
    },

    interesAlumno: (req, res) => {
        console.log(req.body)
        MongoClient.connect(url, async function (err, db) {
            if (err) throw err
            var dbo = db.db(mydb);

            const myobj = { nombre: req.body.user }
            dbo.collection("Alumnos").findOne(myobj, async function (err, result1) {
                if (err) throw err
                console.log(result1)

                if (result1 != null) {
                    dbo.collection("Alumnos").updateOne({telefono: result1.telefono}, {$set:{asignaturas: [req.body.red1,req.body.red2,req.body.red3,req.body.red4,req.body.red5,req.body.red6]}}, async function (err, result2) {
                        if (err) throw err                        
                        console.log(result2)
                    });
                    // res.json({
                    //     data: result1.nombre,
                    //     message: true
                    // })
                }
            });
        })

    }
};

module.exports = user;