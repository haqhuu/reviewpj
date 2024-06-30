const userController = require('../controllers/userController.js')

const express = require('express')
const router = express.Router()

// define the home page route
const initApi = (app) => {
    router.post(`/api/create-new-user`, userController.handleCreateUser)
    router.get(`/api/get-user`, userController.handleGetUser)

    return app.use('/', router)
}

module.exports = initApi