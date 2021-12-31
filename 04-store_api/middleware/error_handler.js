const errorHandlerMiddleware = (err, req, res, next) => {
	return res.status(500).send("Something went wrong, please try again later...")
}

module.exports = errorHandlerMiddleware
