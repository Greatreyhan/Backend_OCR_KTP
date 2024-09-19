require('dotenv').config()

const express = require('express')
const cors = require('cors') // Import cors package
const usersRoutes = require('./routes/users.js')
const ktpRoutes = require('./routes/ktp.js')
const port = process.env.PORT || 5000

const app = express()

// Use CORS middleware to allow all origins
app.use(cors())

app.listen(port, () => {
    console.log('server berhasil berjalan di Port ' + port)
})

app.use(express.json())
app.use('/assets', express.static('public'))

app.use('/users', usersRoutes)
app.use('/ktp', ktpRoutes)

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})
