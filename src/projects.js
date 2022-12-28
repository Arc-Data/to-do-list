const Project = (title, description, tasks) => {
	return {
		title, 
		description,
		tasks,
	}
}

const projects = (() => {
	const projects = [];

	const getProjectList = () => projects;

	const addProject = (title, desc) => {
		const newProject = Project(title, desc, []);
		projects.push(newProject);
	}

	const getProject = (index) => {
		return projects[index];
	}

	const addTask = (index, task) => {
		projects[index].tasks.push(task);
	}

	return {
		addProject,
		getProjectList,
		getProject,
		addTask, 
	}
})();


export default projects;