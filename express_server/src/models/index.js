// handles the file system
const fs = require('fs')
// path library
const path = require('path')
// necessary objects to set the models
const { Sequelize, DataTypes } = require('sequelize');
// configuration
const config = require('../config/config')


// map the will contain all the models
const db = {}

// set the databse
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

fs
 .readdirSync(__dirname) // Read the current directory get an array of different files
 .filter((file) => file !== 'index.js') // filter the current file
 .forEach((file) => {
     // import the current model of the file
     const file_path = path.join(__dirname, file)
     const model = sequelize.import(file_path)
     // add it to the model map
     db[model.name] = model
 })

// useful handlers
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db