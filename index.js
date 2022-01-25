const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const userRoute = require('./routes/userRoute');

userRoute(app)
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", function(req, res){
    res.send("Ola mundo pelo express")
})



app.listen(port, () => console.log('API rodando na porta 5000'))