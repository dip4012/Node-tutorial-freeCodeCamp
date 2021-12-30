class customAPIError extends Error {
	constructor(message, statusCode) {
		super(message)
		this.statusCode = statusCode
	}
}

const createCustomError = (msg, status) => {
	return new customAPIError(msg, status)
}

module.exports = { customAPIError, createCustomError }
