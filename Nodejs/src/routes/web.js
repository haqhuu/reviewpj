const homeController = require('../controllers/homeController.js')

const express = require('express')
const router = express.Router()

// define the home page route
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    return app.use('/', router)
}

module.exports = initWebRoute