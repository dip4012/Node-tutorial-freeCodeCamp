//  check username, password in post(login) request
//  if exist creat new JWT
//  send back to frontend

//  setup authentication so only the request with JWT can access the dashboard

const { createCustomError } = require("../errors/custom_error")

const login = (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		throw createCustomError("Please provide username and password.", 400)
	}

	res.send("Fake login/Register/SignUp Route")
}

const dashboard = (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100)
	res.status(200).json({
		msg: `Hello John Doe`,
		secret: `Here is your authorised data, your lucky number is ${luckyNumber}`,
	})
}

module.exports = { login, dashboard }
