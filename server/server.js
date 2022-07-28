const express = require("express")
const app = express()
app.use(express.json())
const router = require("./routes/routes")
app.use(express.json())
app.use("/",router)
const port =  5050
app.listen(port , console.log("Sevidor escuchando en puerto "+ port))

