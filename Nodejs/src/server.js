let bodyParser = require('body-parser')
const initWebRoute = require('./routes/web.js')
const initApi = require('./routes/api.js')
require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

initWebRoute(app)
initApi(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 