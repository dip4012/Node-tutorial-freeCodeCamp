const { query } = require("express")
const Product = require("../model/product")

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({
		price: { $gt: 30 },
		rating: { $gte: 4 },
	})
		.sort("price rating")
		.select("name price rating")
	res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, fields, numericFilters } = req.query
	const queryObject = {}

	if (featured) {
		queryObject.featured = featured === "true" ? true : false
	}

	if (company) {
		queryObject.company = company
	}

	if (name) {
		queryObject.name = { $regex: name, $options: "i" }
	}

	// numeric filters
	if (numericFilters) {
		const operatorMap = {
			">": "$gt",
			">=": "$gte",
			"=": "$eq",
			"<": "$lt",
			"<=": "$lte",
		}

		const regEx = /\b(<|<=|=|>|>=)\b/g
		let filters = numericFilters.replace(
			regEx,
			(match) => `-${operatorMap[match]}-`
		)
		const options = ["price", "rating"]
		filters = filters.split(",").forEach((item) => {
			const [field, operator, value] = item.split("-")
			queryObject[field] = { [operator]: Number(value) }
		})
	}

	let result = Product.find(queryObject)
	// sort
	if (sort) {
		const sortList = sort.split(",").join(" ")
		result = result.sort(sortList)
	} else {
		result = result.sort("createdAt")
	}
	// fields
	if (fields) {
		const fieldsList = fields.split(",").join(" ")
		result = result.select(fieldsList)
	}

	const page = Number(req.query.page) || 1
	const limit = Number(req.query.limit) || 10
	const skip = (page - 1) * limit
	result = result.limit(limit).skip(skip)

	const products = await result
	res.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllProductsStatic, getAllProducts }
