require("dotenv").config()
require("express-async-error")

const express = require("express")
const app = express()

const mainRouter = require("./routes/main")
const errorHandlerMiddleware = require("./middleware/error_handler")
const notFound = require("./middleware/not_found")
const connectDB = require("./db/connect")

// middleware
app.use(express.static("./public"))
app.use(express.json())

// routes
app.use("/api/v1", mainRouter)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server connected at port ${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()
