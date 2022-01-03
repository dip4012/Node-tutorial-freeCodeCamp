//  check username, password in post(login) request
//  if exist creat new JWT
//  send back to frontend

//  setup authentication so only the request with JWT can access the dashboard
const jwt = require("jsonwebtoken")
const { BadRequestError } = require("../errors/index")

const login = (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		throw new BadRequestError("Please provide username and password.")
	}

	//	in production, ID is provided by the DB
	const id = new Date().getDate()

	//	try to keep payload small, better experience for user
	//	in production level, set secret as long, complex and unguessable string value!!!!!
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	})

	res.status(200).json({ msg: "user created", token })
}

const dashboard = (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100)

	res.status(200).json({
		msg: `Hello ${req.user.username}`,
		secret: `Here is your authorised data, your lucky number is ${luckyNumber}`,
	})
}

module.exports = { login, dashboard }
