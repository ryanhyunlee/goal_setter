const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const goalRoutes = require('./routes/goalRoutes.js')

// Port
const port = process.env.PORT || 5000

const app = express()

// Routes
app.use('/api/goals', goalRoutes)

// Server
app.listen(port, () => console.log(`Server runnning on port:${port}`))
