class CustomAPIError extends Error {
	constructor(statusCode, message) {
		super(message)
		this.statusCode = statusCode
	}
}

const createCustomError = (msg, status) => {
	return new CustomAPIError(status, msg)
}

module.exports = { CustomAPIError, createCustomError }
