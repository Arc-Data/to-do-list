const Task = (title, description, dueDate, priority) => {
	let isFinished = false;
	return {
		title, 
		description,
		dueDate,
		priority,
		isFinished,
	}
}

const task = (() => {
	const createTask = (title, description, date, priority) => {
		return Task(title, description, date, priority);
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