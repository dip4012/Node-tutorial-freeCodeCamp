require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

const connectDB = require("./db/connect")

const products = require("./routes/product")
const notFoundMiddleware = require("./middleware/not_found")
const errorHandlerMiddleware = require("./middleware/error_handler")

// middleware

app.use(express.json())

// routes

app.get("/", (req, res) => {
	res
		.status(200)
		.send('<h1>STORE API</h1><a href="api/v1/products">products</a>')
})

// product routes

app.use("/api/v1/products", products)
app.use(notFoundMiddleware)
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
