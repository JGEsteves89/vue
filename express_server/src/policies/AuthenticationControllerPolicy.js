
const joi = require('joi')

module.exports = {
	register(req, res, next) {
		//   schema validation for the email
		const schema = {
			email: joi.string().email(),
			password: joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}') // no symbols, 8 to 32 chars long
			)
		}

		const { error, value } = joi.validate(req.body, schema);
		if (error) {
			// get the key that had an error
			switch (error.details[0].context.key) {
				case 'email':
					res.status(400).send({
						error: 'You must provide a valid email adress'
					})
					break;
				case 'password':
					res.status(400).send({
						error: `The password provided must match the following rules:
						<br>
						1.It must contain only leters and numbers.
						<br>
						2.It must be between 8 to 32 characters long.` 
					})
					break;
			}
		} else {
			// preform the next operation on the queue in routes
			next()
		}
	}
}