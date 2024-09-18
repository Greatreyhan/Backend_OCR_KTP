require('dotenv').config()

const express = require('express')
const usersRoutes = require('./routes/users.js')
const ktpRoutes = require('./routes/ktp.js')
const logMiddlewares = require('./middlewares/logReq.js')
const upload = require('./middlewares/multer.js')
const port = process.env.PORT || 5000 

const app = express()

app.listen(port,()=>{
    console.log('server berhasil berjalan di Port '+port)
})

app.use(express.json())
app.use('/assets',express.static('public'))

app.use('/users', usersRoutes)
app.use('/ktp', ktpRoutes)

app.post('/upload', upload.single('photo'),(req,res)=>{
    res.json({
        message: 'Upload Berhasil'
    })
})

app.use((err,req,res,next)=>{
    res.json({
        message: err.message
    })
})


