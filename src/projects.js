const Project = (title, description, tasks) => {
	return {
		title, 
		description,
		tasks,
	}
}

const projects = (() => {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	console.log(projects);
	const getProjectList = () => projects;

	const addProject = (title, desc) => {
		const newProject = Project(title, desc, []);
		projects.push(newProject);
		saveProjectState();
	}

	const getProject = (index) => {
		return projects[index];
	}

	const saveProjectState = () => {
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	const addTask = (index, task) => {
		projects[index].tasks.push(task);
		saveProjectState();
	}

	const deleteProject = (index) => {
		projects.splice(index, 1);		
		saveProjectState();
	}

	const deleteProjectTask = (index, taskIdx) => {
		projects[index].tasks.splice(taskIdx, 1);
		saveProjectState();
	}

	return {
		addProject,
		getProjectList,
		getProject,
		deleteProject,
		deleteProjectTask,
		addTask, 
		saveProjectState,
	}
})();


export default projects;