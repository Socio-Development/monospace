import express from 'express'
import { validateEnv } from './config/env.js'

validateEnv()

const app = express()
const port = process.env.AUTH_SERVICE_PORT as string

// Logger middleware
app.use((req, res, next) => {
  const time = Date.now()
  res.on('finish', () => {
    console.log(`${req.method} ${req.path} ${res.statusCode} ${Date.now() - time}ms`)
  })
  next()
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
