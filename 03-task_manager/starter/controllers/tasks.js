const Tasks = require("../models/task")

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Tasks.find({})
		res.status(200).json({ tasks })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const createTask = async (req, res) => {
	try {
		const task = await Tasks.create(req.body)
		res.status(201).json(task)
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params
		const task = await Tasks.findOne({ _id: taskID })

		if (!task) {
			return res.status(404).json({ msg: `No task with id: ${taskID}` })
		}

		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

const updateTask = (req, res) => {
	res.send("update task!!")
}

const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params
		const task = await Tasks.findOneAndDelete({ _id: taskID })

		if (!task) {
			return res.status(404).json({ msg: `No task found with id ${taskID}` })
		}

		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }
