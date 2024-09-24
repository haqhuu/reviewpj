let db = require('../models/index.js')

let createNewCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        let message = {}

        try {
            const isExistCategory = await isExistName(data.name)

            if (isExistCategory === true) {
                console.log("=> categoryService.createCategory said: Cate exist!")

                message = {
                    errCode: 2,
                    errMessage: `Category is exist!`
                }

                return resolve(message)
            }

            const newCategory = await db.Category.create({
                name: data.name
            });

            await newCategory.save()
            console.log("=> categoryService.createCategory said: Cate created!")

            message = {
                errCode: 0,
                errMessage: `Category was created success!`
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

let isExistName = async (name) => {
    try {
        const category = await db.Category.findOne({
            where: {
                name: name
            },
            raw: true
        })
        if (!category) {
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
    createNewCategory, getUser
}