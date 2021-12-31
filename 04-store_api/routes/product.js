const {
	getAllProductsStatic,
	getAllProducts,
} = require("../controllers/product")

const express = require("express")
const router = express.Router()

router.route("/").get(getAllProducts)
router.route("/static").get(getAllProductsStatic)

module.exports = router
