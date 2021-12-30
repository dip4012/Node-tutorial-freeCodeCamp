const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()
const notFound = require("./middleware/not_found")
const errorHandlerMiddleware = require("./middleware/error_handler")

//  middleware

app.use(express.static("./public"))
app.use(express.json())

//  routes

app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server listening at port ${port}...`))
	} catch (error) {
		console.log(error)
	}
}

start()
