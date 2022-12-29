const Task = (title, description, dueDate, priority) => {
	let isFinished = false;
	return {
		title, 
		description,
		dueDate,
		isFinished,
	}
}

const task = (() => {
	const createTask = (title, description, date) => {
		return Task(title, description, date);
	}

	const changeStatus = (task, value) => {
		task.isFinished = value;
	}

	return {
		createTask,
		changeStatus,
	}
})();

export default task;