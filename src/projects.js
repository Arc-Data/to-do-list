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
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	const getProject = (index) => {
		return projects[index];
	}

	const addTask = (index, task) => {
		projects[index].tasks.push(task);
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	const deleteProject = (index) => {
		console.log("hello")
		projects.splice(index, 1);		
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	return {
		addProject,
		getProjectList,
		getProject,
		deleteProject,
		addTask, 
	}
})();


export default projects;