require("dotenv").config()
require("express-async-errors")

//	extra security packages
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")

const express = require("express")
const app = express()

//  error handlers
const notFound = require("./middleware/not_found")
const errorHandlerMiddleware = require("./middleware/error_handler")

//  connect DB
const connectDB = require("./db/connect")

//	authenticate user
const authenticateUser = require("./middleware/authentication")

//  routes

const authRouter = require("./routes/auth")
const jobsRouter = require("./routes/job")

app.use(express.json())

app.set("trust proxy", 1)
app.use(
	rateLimiter({
		windowMs: 60 * 1000,
		max: 100,
	})
)
app.use(helmet())
app.use(cors())
app.use(xss())

//	Swagger
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDocument = YAML.load("./swagger.yaml")

//  routes
app.get("/", (req, res) =>
	res.send('<h1>WELCOME TO JOBS API</h1><a href="/api-docs">Documentation</a>')
)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", authenticateUser, jobsRouter)

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
