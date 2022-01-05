const jwt = require("jsonwebtoken")
const { UnauthenticatedError } = require("../errors")
const User = require("../models/Users")

const auth = async (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		next(new UnauthenticatedError("Authentication Invalid!!"))
	}

	const token = authHeader.split(" ")[1]
	try {
		const payload = await jwt.verify(token, process.env.JWT_SECRET)
		req.user = { userId: payload.userId, name: payload.name }
		next()
	} catch (error) {
		next(new UnauthenticatedError("Authentication Invalid!!"))
	}
}

module.exports = auth
