// Get the model of the user to perform operations
const { User } = require('../models')

module.exports = {
	async register(req, res) {
		try {
			// Creates a new user
			const user = await User.create(req.body);

			// Sends the user data as json
			res.send(user.toJSON());
		} catch (err) {
			// Catch any error from the that happen on the model db
			res.status(400).send({
				error: 'This email account is  already in use.'
			})
		}
	}
}
