let db = require('../models/index.js')

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        let message = {}

        try {
            const isExist = await isExistEmail(data.email)

            if (isExist === true) {
                message = {
                    errCode: 2,
                    errMessage: `Email is exist. Try another email!`
                }

                return resolve(message)
            }

            // not hash password
            const newUser = await db.User.create({
                name: data.name,
                email: data.email,
                password: data.password,
                country: data.country,
                roleId: data.roleId,
                avatar: data.avatar
            });
            await newUser.save()
            message = {
                errCode: 0,
                errMessage: `User was created success!`
            }

            return resolve(message)
        } catch (error) {
            message = {
                errcode: 3,
                errMessage: error.message
            }

            return reject(message)
        }
    })
}

let isExistEmail = async (email) => {
    try {
        const user = await db.User.findOne({
            where: {
                email: email
            },
            raw: true
        })
        if (!user) {
            return false
        }
        else
            return true
    } catch (error) {
        return false
    }
}

let getUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let message = {}
        let user = []
        try {
            if (userId === 'ALL') {
                user = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    },
                    raw: true
                })
            } else {
                user = await db.User.findOne({
                    where: {
                        id: userId
                    },
                    attributes: {
                        exclude: ['password']
                    }, raw: true
                })
            }
            if (!user) {
                message = {
                    errCode: 2,
                    errMessage: `User isn't exist!`,
                    user: []
                }
            } else {
                message = {
                    errCode: 0,
                    errMessage: `Get user success!`,
                    user: user
                }
            }

            return resolve(message)
        } catch (error) {
            message = {
                errCode: 0,
                errMessage: error.message,
                user: []
            }

            return reject(message)
        }
    })
}

module.exports = {
    createNewUser, getUser
}