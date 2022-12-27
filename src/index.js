import './style.css';
import project from './projects.js'


const DOMController = (() => {
	const addProjectBtn = document.querySelector('#open-project-dialog');
	const projectDialog = document.querySelector('dialog');
	
	const projectTitle = document.querySelector('#project-title');
	const projectTitleCounter = document.querySelector('#title-counter');
	const projectDesc = document.querySelector('#project-description');
	const projectDescCounter = document.querySelector('#desc-counter');
	const createProjectBtn = document.querySelector('#create-project');

	const projectListContainer = document.querySelector('.projects-list');

	const openDialog = () => {
		projectDialog.showModal();
	}

	const closeDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const countLetters = (event, p, limit) => {
		p.textContent = `${event.target.value.length}/${limit}`;
	}

	const cleanInput = () => {
		projectTitle.value = '';
		projectDesc.value = '';
	}

	const clearProjectList = () => {
		while(projectListContainer.firstChild) {
			projectListContainer.removeChild(projectListContainer.lastChild);
		}
	}

	const renderProjectList = () => {
		const projectList = project.getProjects()

		clearProjectList();

		projectList.forEach((project, idx) => {
			let div = document.createElement('div');
			div.textContent = project.title;
			div.dataset.idx = idx; 

			projectListContainer.append(div);
		})
	}

	const createProject = (e) => {
		e.preventDefault();

		project.addProject(projectTitle.value, projectDesc.value)
		cleanInput();
		renderProjectList();
		projectDialog.close();
	}

	project.addProject('All Tasks', '');
	renderProjectList();

	projectDialog.addEventListener('click', closeDialog)
	addProjectBtn.addEventListener('click', openDialog)

	projectTitle.addEventListener('input', (e) => countLetters(e, projectTitleCounter, 30));
	projectDesc.addEventListener('input', (e) => countLetters(e, projectDescCounter, 50));
	createProjectBtn.addEventListener('click', createProject);

})();	