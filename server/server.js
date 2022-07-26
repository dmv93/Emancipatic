const express =require("express")
const app = express()
const router =require("./routes/routes")
const weapon= require("./scraping/scraping")
const port =  5050
app.use(express.json())
app.use("/",router)

app.listen(port , console.log("Sevidor escuchando en puerto "+ port))

