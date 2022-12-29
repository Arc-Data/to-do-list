const Project = (title, description, tasks) => {
	return {
		title, 
		description,
		tasks,
	}
}

const projects = (() => {
	const projects = JSON.parse(localStorage.getItem("projects")) || [];

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
	}

	const deleteProject = (index) => {
		projects.splice(index, 1);		
		saveProjectState();
	}

	return {
		addProject,
		getProjectList,
		getProject,
		deleteProject,
		addTask, 
		saveProjectState,
	}
})();


export default projects;