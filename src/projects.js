// projects are a container to which specific
// todo objects are contained.

const projects = (title, description) => {
	tasks = [];
	return {
		title, 
		description,
		tasks,
	}
}

const renderProjects = (() => {
	
	const projectList = () => {
		console.log("hello")
	}

	return {
		projectList,
	}
})();

export default renderProjects.projectList;