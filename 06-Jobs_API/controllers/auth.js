const { StatusCodes } = require("http-status-codes")
const User = require("../models/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
	const user = await User.create({ ...req.body })
	const token = jwt.sign(
		{ userId: user._id, name: user.name },
		process.env.JWT_SECRET,
		{ expiresIn: "30d" }
	)
	res.status(StatusCodes.CREATED).json({ name: user.getName(), token })
}

const login = async (req, res) => {
	res.send("login user")
}

module.exports = { register, login }