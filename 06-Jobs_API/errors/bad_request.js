const CustomAPIError = require("./custom_api")
const { StatusCodes } = require("http-status-codes")

class BadRequestError extends CustomAPIError {
	constructor(message) {
		super(message)
		this.statusCode = StatusCodes.BAD_REQUEST
	}
}

module.exports = BadRequestError
