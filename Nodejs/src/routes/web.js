import homeController from '../controllers/homeController.js'

import express from 'express'
const router = express.Router()

// define the home page route
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    return app.use('/', router)
}

export default initWebRoute