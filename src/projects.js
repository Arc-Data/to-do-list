const Project = (title, description, tasks) => {
	return {
		title, 
		description,
		tasks,
	}
}

const projects = (() => {
	const projects = [];

	const getProjects = () => projects;

	const addProject = (title, desc) => {
		const newProject = Project(title, desc, []);
		projects.push(newProject);
	}

	return {
		addProject,
		getProjects,
	}
})();


export default projects;