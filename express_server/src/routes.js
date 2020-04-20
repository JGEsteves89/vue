const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')


module.exports = {
    setup: function (app) {
        // simple inpoint route for get request to a status inpoint.
        //app.post('/register', AuthenticationController.register)
		app.post('/register',
		AuthenticationControllerPolicy.register, // preforms the validation of the parameters
		AuthenticationController.register) // preforms the creation of the new user
		
		// simple inpoint route for get request to a status inpoint.
        app.get('/9gag', (req, res) =>{
            gagServices.fetch_9gag_data().then(data => res.send(data))
        })
    }
};