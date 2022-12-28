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

	const general = document.querySelector('#general');
	const projectListContainer = document.querySelector('.projects-list');

	const mainContent = document.querySelector('#main-content');


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
		projectTitleCounter.textContent = `0/30`;
		projectDescCounter.textContent = `0/50`;
	}

	const clearProjectList = () => {
		while(projectListContainer.firstChild) {
			projectListContainer.removeChild(projectListContainer.lastChild);
		}
	}

	const renderGeneralPage = () => {
		clearPageContent();

		const h1 = document.createElement('h1');
		h1.textContent = 'All Tasks';
		h1.classList.add('project-title-container');
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = 'General Tasks';
		p.classList.add('project-description-container');
		mainContent.appendChild(p);
	}

	const renderPage = (index) => {
		clearPageContent();
		const projectObj = project.getProject(index);	
		
		const h1 = document.createElement('h1');
		h1.textContent = projectObj.title;
		h1.classList.add('project-title-container');
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = projectObj.description;
		p.classList.add('project-description-container');
		mainContent.appendChild(p);
	}

	const clearPageContent = () => {
		while(mainContent.firstChild) {
			mainContent.removeChild(mainContent.lastChild);
		}
	}

	const renderProjectList = () => {
		const projectList = project.getProjectList()

		clearProjectList();

		projectList.forEach((project, idx) => {
			let div = document.createElement('div');
			div.textContent = project.title;
			div.dataset.idx = idx; 
			div.addEventListener('click', (e) => {
				renderPage(e.target.dataset.idx);
			})

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

	renderProjectList();
	renderGeneralPage();

	general.addEventListener('click', renderGeneralPage);

	projectDialog.addEventListener('click', closeDialog);
	addProjectBtn.addEventListener('click', openDialog);

	projectTitle.addEventListener('input', (e) => countLetters(e, projectTitleCounter, 30));
	projectDesc.addEventListener('input', (e) => countLetters(e, projectDescCounter, 50));
	createProjectBtn.addEventListener('click', createProject);

})();	