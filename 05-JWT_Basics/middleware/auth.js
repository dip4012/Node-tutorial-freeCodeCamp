const { UnauthenticatedError } = require("../errors/index")
const jwt = require("jsonwebtoken")

const authMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		next(new UnauthenticatedError("No token provided."))
	}

	const token = authHeader.split(" ")[1]

	try {
		const decode = jwt.verify(token, process.env.JWT_SECRET)
		const { id, username } = decode
		req.user = { id, username }
		next()
	} catch (error) {
		next(new UnauthenticatedError("Not authorised to access this route"))
	}
}

module.exports = authMiddleware
