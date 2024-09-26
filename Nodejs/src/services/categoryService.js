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


            await db.Category.create({
                name: data.name
            });

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
        console.log(error)
        return false
    }
}

let getCategory = (cateId) => {
    return new Promise(async (resolve, reject) => {
        let message = {}
        let category = []
        try {
            if (cateId === 'ALL') {
                category = await db.Category.findAll()
            } else {
                category = await db.Category.findOne({
                    where: {
                        id: cateId
                    }
                })
            }
            if (!category) {
                message = {
                    errCode: 2,
                    errMessage: `Category isn't exist!`,
                    category: []
                }
            } else {
                message = {
                    errCode: 0,
                    errMessage: `Get category success!`,
                    category: category
                }
            }

            return resolve(message)
        } catch (error) {
            message = {
                errCode: 0,
                errMessage: error.message,
                category: []
            }

            return reject(message)
        }
    })
}

let putCategory = (cateId) => {
    return new Promise(async (resolve, reject) => {

        try {
            let message = {}
            let cate = await db.Category.findOne({
                where: {
                    id: cateId
                }
            })

            if (!cate) {
                message = {
                    errCode: 2,
                    errMessage: "Category is not exist!",
                    category: {}
                }
                return resolve(message)
            } else {
                message = {
                    errCode: 0,
                    errMessage: "Category here!",
                    category: cate

                }
            }
            return resolve(message)


        } catch (e) {
            message = {
                errCode: 10,
                errMessage: e,
                category: {}
            }
            return reject(message)
        }
    })
}

let deleteCategory = (cateId) => {
    return new Promise(async (resolve, reject) => {
        let message = {}
        try {
            let cate = await db.Category.findOne({
                where:
                    { id: cateId }
            })
            if (!cate) {
                message = {
                    errCode: 1,
                    errMessage: "Category doesnt exist!"
                }
            } else {
                await cate.destroy()
                message = {
                    errCode: 0,
                    errMessage: "Category destroyed!"
                }
            }
            return resolve(message)

        } catch (e) {
            message = {
                errCode: 10,
                errMessage: e
            }
            return reject(message)
        }
    })
}

module.exports = {
    createNewCategory, getCategory, putCategory, deleteCategory
}