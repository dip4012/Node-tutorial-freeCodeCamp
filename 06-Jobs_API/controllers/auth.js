const { StatusCodes } = require("http-status-codes")
const User = require("../models/Users")
const { BadRequestError, UnauthenticatedError } = require("../errors/index")
const Users = require("../models/Users")

const register = async (req, res) => {
	const user = await User.create({ ...req.body })
	const token = user.createJWT()
	res.status(StatusCodes.CREATED).json({ name: user.getName(), token })
}

const login = async (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		throw new BadRequestError("Please provide email and password!!")
	}

	const user = await Users.findOne({ email })

	if (!user) {
		throw new UnauthenticatedError("Invalid credentials")
	}

	const isPasswordCorrect = await user.comparePassword(password)
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError("Invalid password")
	}

	const token = user.createJWT()
	res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = { register, login }
