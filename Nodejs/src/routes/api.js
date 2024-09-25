const userController = require('../controllers/userController.js')
const categoryController = require('../controllers/categoryController.js')

const express = require('express')
const router = express.Router()

// define the home page route
const initApi = (app) => {
    router.post(`/api/create-new-user`, userController.handleCreateUser)
    router.get(`/api/get-user`, userController.handleGetUser)

    router.post(`/api/create-category`, categoryController.handleCreateCategory)
    router.get(`/api/get-category`, categoryController.handleGetCategory)
    router.put(`/api/put-category`, categoryController.handlePutCategory)


    return app.use('/', router)
}

module.exports = initApi