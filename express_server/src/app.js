console.log("************ App started ************")

// Import modules
//----------------------------------------------------------------
// Barebone js application framework
const express = require('express')
// A parser to process json data
const bodyParser = require('body-parser')
// Allows host/client to access
const cors = require('cors')
// For loging
const morgan = require('morgan')
// imports the data base models
const {sequelize} = require('./models')

// Owen modules
//----------------------------------------------------------------
// import configuration of this webpages
const config = require('./config/config')
// import routes file
const routes = require('./routes')
// importing our modules
const gagServices = require("./services/gagService")

// App setup
//----------------------------------------------------------------
// main app 
const app = express()
// tells app to use morgan for log and 'combine' setting
app.use(morgan('combined'))
// use the bodyParser parser
app.use(bodyParser.json())
// set cors to make this accessible from client
app.use(cors())

// Setup routes 
//----------------------------------------------------------------
routes.setup(app)

// Listenings setup
//----------------------------------------------------------------
// setup listener for database ½‘¾úüóíúü¾ú
sequelize.sync().then(() => {
    // start server to handling requests on port
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})



