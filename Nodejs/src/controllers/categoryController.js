const categoryService = require('../services/categoryService.js')

let handleCreateCategory = async (req, res) => {
    try {
        let data = req.body

        if (!data.name) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing parameter!'
            })
        }

        let message = await categoryService.createNewCategory(data)
        console.log("=> categoryController.handleCreateCategory said: Cate Created!")

        return res.status(200).json(message)

    } catch (error) {
        return res.status(200).json({
            errCode: 10,
            errMessage: error.message
        })
    }
}

let handleGetCategory = async (req, res) => {
    try {
        let cateId = req.query.id

        if (!cateId) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing parameter!',
                category: []
            })
        }

        let message = await categoryService.getCategory(cateId)

        return res.status(200).json({
            message
        })
    } catch (e) {
        return res.status(200).json({
            errCode: 5,
            errMessage: e,
            category: []
        })
    }
}

let handlePutCategory = async (req, res) => {
    try {
        let cateId = req.query.id

        if (!cateId) {
            return res.status(200).json({
                errCode: 1,
                errMessage: "Missing parameter!",
                category: {}
            })
        }

        let message = await categoryService.putCategory(cateId)

        return res.status(200).json({
            message
        })
    } catch (e) {
        return res.status(200).json({
            message
        })
    }

}

module.exports = {
    handleCreateCategory,
    handleGetCategory,
    handlePutCategory
}