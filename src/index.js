import './style.css';
import project from './projects.js';
import task from './task.js';


const DOMController = (() => {
	console.log(task)
	const generalTask = [];

	const addProjectBtn = document.querySelector('#open-project-dialog');
	const projectDialog = document.querySelector('#project-form-dialog');
	const taskDialog = document.querySelector("#task-form-dialog");

	const projectTitle = document.querySelector('#project-title');
	const projectTitleCounter = document.querySelector('#title-counter');
	const projectDesc = document.querySelector('#project-description');
	const projectDescCounter = document.querySelector('#desc-counter');
	const createProjectBtn = document.querySelector('#create-project');
	const createTaskBtn = document.querySelector('#create-task');

	const general = document.querySelector('#general');
	const projectListContainer = document.querySelector('.projects-list');

	const mainContent = document.querySelector('#main-content'); 
	// const taskContainer = document.querySelector('#task-container'); 

	let currentPage = -1;

	const openProjectFormDialog = () => {
		projectDialog.showModal();
	}

	const closeProjectFormDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const openTaskFormDialog = () => {
		taskDialog.showModal();
	}

	const closeTaskFormDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const countLetters = (event, p, limit) => {
		p.textContent = `${event.target.value.length}/${limit}`;
	}

	const cleanProjectInput = () => {
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

	const clearTasks = (container) => {
		while(container.firstChild) {
			container.removeChild(container.lastChild);
		}
	} 

	const renderGeneralTasks = () => {
		const taskContainer = document.querySelector('#task-container')
		const projects = project.getProjectList();
		projects.forEach(project => {
			project.tasks.forEach(task => {
				let div = document.createElement('div');
				div.textContent = task.title;
				taskContainer.appendChild(div);
			}) 
		})
	}

	const renderTasks = () => {
		const tasks = project.getProject(currentPage).tasks;
		const taskContainer = document.querySelector('#task-container')
		clearTasks(taskContainer);

		tasks.forEach((task, idx) => {
			let div = document.createElement('div');
			div.textContent = task.title;
			taskContainer.appendChild(div);
		})

	}

	const createTask = (e) => {
		e.preventDefault();
		const title = document.querySelector('#task-title').value;
		const description = document.querySelector('#task-description').value;
		const dueDate = document.querySelector('#due-date').value;
		const priority = document.querySelector("#task-priority").value;

		if(!title || !priority || !dueDate) return; 

		const taskObj = task.createTask(title, description, dueDate, priority);
		project.addTask(currentPage, taskObj);
		renderTasks();
		taskDialog.close();
	}

	const renderGeneralPage = () => {
		clearPageContent();
		currentPage = -1;

		const h1 = document.createElement('h1');
		h1.textContent = 'All Tasks';
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = 'General Tasks';
		p.style.fontSize = '1.4rem';
		mainContent.appendChild(p);

		const taskContainer = document.createElement('div');
		taskContainer.id = 'task-container';
		mainContent.appendChild(taskContainer);
		renderGeneralTasks();
	}

	const renderPage = (index) => {
		clearPageContent();
		currentPage = index;
		const projectObj = project.getProject(index);	
		
		const h1 = document.createElement('h1');
		h1.textContent = projectObj.title;
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = projectObj.description;
		mainContent.appendChild(p);

		const createTaskBtn = document.createElement('button');
		createTaskBtn.textContent = 'Create Task';
		createTaskBtn.classList.add('create-task-btn');
		createTaskBtn.dataset.idx = index;
		createTaskBtn.addEventListener('click', openTaskFormDialog);
		mainContent.appendChild(createTaskBtn);

		const taskContainer = document.createElement('div');
		taskContainer.id = 'task-container';
		mainContent.appendChild(taskContainer);

		renderTasks();

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
		cleanProjectInput();
		renderProjectList();
		renderPage(project.getProjectList().length - 1);
		projectDialog.close();
	}

	renderProjectList();
	renderGeneralPage();

	general.addEventListener('click', renderGeneralPage);

	projectDialog.addEventListener('click', closeProjectFormDialog);
	taskDialog.addEventListener('click', closeTaskFormDialog);
	addProjectBtn.addEventListener('click', openProjectFormDialog);
	createTaskBtn.addEventListener('click', createTask);
	projectTitle.addEventListener('input', (e) => countLetters(e, projectTitleCounter, 30));
	projectDesc.addEventListener('input', (e) => countLetters(e, projectDescCounter, 50));
	createProjectBtn.addEventListener('click', createProject);

})();	