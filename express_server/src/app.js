console.log("*************************************")
console.log("************ App started ************")
console.log("*************************************")

// Import modules:
// Barebone js application framework
const express = require('express')

// A parser to process json data
const bodyParser = require('body-parser')

// Allows host/client to access
const cors = require('cors')

// For loging
const morgan = require('morgan')

// main app
const app = express()
// tells app to use morgan for log and 'combine' setting
app.use(morgan('combined'))
// use the bodyParser parser
app.use(bodyParser.json())
// set cors to make this accessible from client
app.use(cors())

// simple inpoint route for get request to a status inpoint.
app.get('/status', (req, res) =>{
    res.send({
        message: 'Hello darkness my old friend'
    })
})

// start server to handling requests on port
app.listen(process.env.PORT || 8081)

