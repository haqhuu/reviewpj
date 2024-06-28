
import initWebRoute from './routes/web.js'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

const port = process.env.PORT || 3000

initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 