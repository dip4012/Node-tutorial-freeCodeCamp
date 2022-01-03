const CustomAPIError = require("./custom_error")
const { StatusCodes, METHOD_FAILURE } = require("http-status-codes")

class UnauthenticatedError extends CustomAPIError {
	constructor(message) {
		super(message)
		this.statusCode = StatusCodes.UNAUTHORIZED
	}
}

module.exports = UnauthenticatedError
