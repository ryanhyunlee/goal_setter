const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const goalRoutes = require('./routes/goalRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const { errorHandler } = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db.js')

// Port
const port = process.env.PORT || 5000

connectDB()
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

// Server
app.listen(port, () =>
  console.log(`Server runnning on port:${port}`.blue.underline)
)
