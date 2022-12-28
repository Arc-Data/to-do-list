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

	return {
		addProject,
		getProjectList,
		getProject,
	}
})();


export default projects;