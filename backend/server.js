const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const goalRoutes = require('./routes/goalRoutes.js')
const { errorHandler } = require('./middleware/errorMiddleware.js')

// Port
const port = process.env.PORT || 5000

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/goals', goalRoutes)
app.use(errorHandler)

// Server
app.listen(port, () => console.log(`Server runnning on port:${port}`))
