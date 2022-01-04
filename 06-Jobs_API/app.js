require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

//  error handlers
const notFound = require("./middleware/not_found")
const errorHandlerMiddleware = require("./middleware/error_handler")

//  connect DB
const connectDB = require("./db/connect")

//  routes
const authRouter = require("./routes/auth")
const jobsRouter = require("./routes/job")

app.use(express.json())
//  extra packages

//  routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobsRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server listening at port ${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()
