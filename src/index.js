require('dotenv').config()
const express = require('express')
const usersRoutes = require('./routes/users.js')
const logMiddlewares = require('./middlewares/logReq.js')

const port = process.env.PORT || 5000 

const app = express()

app.listen(port,()=>{
    console.log('server berhasil berjalan di Port '+port)
})

app.use(logMiddlewares.logRequest)
app.use(express.json())

app.use('/users', usersRoutes)



