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

module.exports = {
    handleCreateUser
}