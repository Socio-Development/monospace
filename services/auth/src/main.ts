import express from 'express'
import { validateEnv } from './config/env.js'

validateEnv()

const app = express()
const port = process.env.PORT || 8081

app.get('/health', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
