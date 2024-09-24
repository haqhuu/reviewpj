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

let handleGetUser = async (req, res) => {
    let userId = req.query.id

    if (!userId) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing parameter!'
        })
    }

    let message = await userService.getUser(userId)

    return res.status(200).json({
        message
    })
}

module.exports = {
    handleCreateCategory
}