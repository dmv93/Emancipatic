

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
                
                if(result == null){
                    const myobj = { "nombre": req.body.nombre, "apellidos": req.body.apellidos, "email": req.body.email, "telefono": req.body.telefono, "dni":req.body.dni,"codpostal":req.body.codpostal,"poblacion":req.body.poblacion,"provincia":req.body.provincia };
                    dbo.collection("Alumnos").insertOne(myobj, async function (err, result1) {
                        if (err) throw err;
                      console.log("Alumno insertado")
                      res.json({
                        data:result1,
                        message:'bien'
                      })
        
                    });
                } else {
                    res.json({
                        
                        message:'mal'
                      })
                }
                

            });
        });
    },
    registroFormador: (req, res) => {
        console.log(req.body)
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            dbo.collection("Formadores").findOne({ dni: req.body.dni }, async function (err, result) {
                if (err) throw err;
                
                if(result == null){
                    const myobj = { "nombre": req.body.nombre, "apellidos": req.body.apellidos, "email": req.body.email, "telefono": req.body.telefono, "dni":req.body.dni,"codpostal":req.body.codpostal,"poblacion":req.body.poblacion,"provincia":req.body.provincia };
                    dbo.collection("Formadores").insertOne(myobj, async function (err, result1) {
                        if (err) throw err;
                      console.log("Formador insertado")
                      res.json({
                        data:result1,
                        message:'bien'
                      })
        
                    });
                } else {
                    res.json({
                        
                        message:'mal'
                      })
                }
                

            });
        });
    },


    
};

module.exports = user;