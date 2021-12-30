const asyncWrapper = async (fn) => {
	try {
		return await fn()
	} catch (error) {
		next(error)
	}
}
