const initWebRoute = require('./routes/web.js')
require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 