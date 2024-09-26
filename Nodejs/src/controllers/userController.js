const userService = require('../services/userService.js')

let handleCreateUser = async (req, res) => {
    let data = req.body

    if (!data.email || !data.password
        || !data.name || !data.roleId
        || !data.country || !data.avatar) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing parameter!'
        })
    }
    let message = await userService.createNewUser(data)

    return res.status(200).json(message)
}

let handleGetUser = async (req, res) => {
    let userId = req.query.id

    if (!userId) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing parameter!',
            user: []
        })
    }

    let message = await userService.getUser(userId)

    return res.status(200).json({
        message
    })
}

let handlePutUser = async (req, res) => {
    let message = {}
    try {
        let userId = req.query.id

        if (!userId) {
            message = {
                errCode: 2,
                errMessage: "Missing parameter!",
                user: {}
            }
        } else {
            message = await userService.putUser(userId)
        }
        return res.status(200).json(message)

    } catch (e) {
        message = {
            errCode: 8,
            errMessage: e,
            user: {}
        }

        return res.status(200).json(message)
    }
}

module.exports = {
    handleCreateUser,
    handleGetUser,
    handlePutUser
}