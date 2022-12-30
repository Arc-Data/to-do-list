import './style.css';
import project from './projects.js';
import task from './task.js';

const DOMController = (() => {
	const addProjectBtn = document.querySelector('#open-project-dialog');
	const projectDialog = document.querySelector('#project-form-dialog');
	const taskDialog = document.querySelector("#task-form-dialog");
	const taskDetailDialog = document.querySelector("#task-detail-dialog");

	const projectTitle = document.querySelector('#project-title');
	const projectTitleCounter = document.querySelector('#title-counter');
	const projectDesc = document.querySelector('#project-description');
	const projectDescCounter = document.querySelector('#desc-counter');
	const createProjectBtn = document.querySelector('#create-project');
	const createTaskBtn = document.querySelector('#create-task');

	const general = document.querySelector('#general');
	const projectListContainer = document.querySelector('.projects-list');

	const mainContent = document.querySelector('#main-content'); 

	let currentPage = -1;

	const openProjectFormDialog = () => {
		projectDialog.showModal();
	}

	const closeDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const openTaskFormDialog = () => {
		taskDialog.showModal();
	}

	const countLetters = (event, p, limit) => {
		p.textContent = `${event.target.value.length}/${limit}`;
	}

	const cleanProjectInput = () => {
		projectTitle.value = '';
		projectDesc.value = '';
		projectTitleCounter.textContent = `0/20`;
		projectDescCounter.textContent = `0/50`;
	}

	const clearContainerItems = (container) => {
		while(container.firstChild) {
			container.removeChild(container.lastChild);
		}
	} 

	const renderGeneralTasks = () => {
		const taskContainer = document.querySelector('#task-container')
		const projects = project.getProjectList();
		projects.forEach((project, projectIdx) => {
			project.tasks.forEach((task, taskIdx) => {
				if(task.isFinished) return;
	
				let taskCard = document.createElement('div');
				taskCard.classList.add('taskCard');
				
				taskContainer.appendChild(taskCard);
				
				let taskTitle = document.createElement('p');
				taskTitle.textContent = task.title;
				taskCard.appendChild(taskTitle);

				let detailsBtn = document.createElement('div');
				detailsBtn.textContent = 'DETAILS';
				detailsBtn.classList.add('btn');
				detailsBtn.classList.add('detail-btn')
				detailsBtn.addEventListener('click', (e) => {
					taskDetails(e, projectIdx, taskIdx)
				});
				taskCard.appendChild(detailsBtn);

				let projectTitle = document.createElement('p');
				projectTitle.textContent = project.title;
				taskCard.appendChild(projectTitle);
				
				let dueDate = document.createElement('p');
				dueDate.textContent = task.dueDate;
				taskCard.appendChild(dueDate);
			}) 
		})
	}

	const setActiveTab = (index) => {
		const active = document.querySelector('.active');
		active.classList.remove('active');
		if(index == -1) {
			general.classList.add('active');
			return;
		}

		const tab = document.querySelector(`[data-idx="${index}"]`);
		tab.classList.add('active');
	}

	const taskDetails = (e, projectPage, taskIdx) => {
		clearContainerItems(taskDetailDialog);
		const projectObj = project.getProject(projectPage);
		const taskObj = projectObj.tasks[taskIdx];
		taskDetailDialog.dataset.idx = taskIdx;

		const taskDetailContainer = document.createElement('div');
		taskDetailContainer.classList.add('task-detail-container');
		taskDetailDialog.appendChild(taskDetailContainer);

		const headerSection = document.createElement('div');
		headerSection.classList.add('task-detail-header');
		taskDetailContainer.appendChild(headerSection);

		const h3 = document.createElement('h3');
		h3.textContent = taskObj.title;

		const dueDate = document.createElement('p');
		dueDate.textContent = `Due Date: ${taskObj.dueDate}`;
		dueDate.style.fontSize = '1.4rem';
		headerSection.append(h3,dueDate);

		const p = document.createElement('p');
		p.textContent = taskObj.description;
		p.classList.add('task-description');

		const btnContainer = document.createElement('div');
		btnContainer.style.padding = '10px';
		btnContainer.classList.add('btn-flex', 'btn-flex-right');

		const completeTaskBtn = document.createElement('div');
		completeTaskBtn.classList.add('btn', 'primary-btn');
		completeTaskBtn.textContent = taskObj.isFinished ? `Set to Incomplete` : `Set to Complete`;
		completeTaskBtn.addEventListener('click', () => {
			task.changeStatus(taskObj, !taskObj.isFinished);
			project.saveProjectState();
			taskDetailDialog.close();
			renderPage(-1);
		})

		const deleteTaskBtn = document.createElement('div');
		deleteTaskBtn.classList.add('btn', 'delete-btn');
		deleteTaskBtn.textContent = 'Delete';
		deleteTaskBtn.addEventListener('click', () => {
			project.deleteProjectTask(projectPage, taskIdx)
			taskDetailDialog.close();
			renderPage(-1);
		});

		const closeBtn = document.createElement('div');
		closeBtn.classList.add('btn', 'ghost-btn');
		closeBtn.textContent = 'Close';
		closeBtn.addEventListener('click', () => {
			taskDetailDialog.close();
		})

		btnContainer.append(deleteTaskBtn, completeTaskBtn,  closeBtn);

		taskDetailContainer.append(headerSection, p, btnContainer);
		taskDetailDialog.showModal();
	}

	const taskComplete = (e, taskIdx) => {
		const projectObj = project.getProject(currentPage);
		const idx = taskIdx ? taskIdx : e.target.closest('div').dataset.idx;
		task.changeStatus(projectObj.tasks[idx], e.target.checked);
		project.saveProjectState();
		renderTasks();
	}

	const renderTasks = () => {
		const tasks = project.getProject(currentPage).tasks;
		const taskContainer = document.querySelector('#task-container')
		clearContainerItems(taskContainer);

		tasks.forEach((taskItem, idx) => {
			let taskCard = document.createElement('div');
			taskCard.classList.add('taskCard');
			taskCard.dataset.idx = idx;
			
			if(taskItem.isFinished) {
				taskCard.classList.add('complete');
			}
			
			let title = document.createElement('p'); 
			title.textContent = taskItem.title;

			let detailsBtn = document.createElement('div');
			detailsBtn.textContent = 'DETAILS';
			detailsBtn.classList.add('btn');
			detailsBtn.classList.add('detail-btn')
			detailsBtn.dataset.idx = idx;
			detailsBtn.addEventListener('click', (e) => taskDetails(e, currentPage, idx));

			let dueDate = document.createElement('div');
			dueDate.textContent = taskItem.dueDate;

			let input = document.createElement('input')
			input.type = 'checkbox';
			input.name = 'finished';
			input.checked = taskItem.isFinished;
			input.addEventListener('click', (e) => taskComplete(e));

			taskCard.append(title, detailsBtn, dueDate, input)
			taskContainer.appendChild(taskCard);

		})

	}

	const createTask = (e) => {
		e.preventDefault();
		const title = document.querySelector('#task-title');
		const description = document.querySelector('#task-description');
		const dueDate = document.querySelector('#due-date');

		if(!title.value || !dueDate.value) return; 

		const taskObj = task.createTask(title.value, description.value, dueDate.value);
		project.addTask(currentPage, taskObj);
		renderTasks();
		title.value = '';
		description.value = '';
		taskDialog.close();
	}

	const renderGeneralPage = () => {
		setActiveTab(-1);
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

	const deleteProject = () => {
		project.deleteProject(currentPage);
		renderProjectList();
		renderGeneralPage();
	}

	const renderPage = (index) => {
		setActiveTab(index);
		clearPageContent();
		currentPage = index;
		if(currentPage == -1) return renderGeneralPage();
		const projectObj = project.getProject(index);	
		
		const h1 = document.createElement('h1');
		h1.textContent = projectObj.title;
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = projectObj.description;
		mainContent.appendChild(p);

		const btnContainer = document.createElement('div');
		btnContainer.classList.add('btn-flex');
		mainContent.appendChild(btnContainer);

		const createTaskBtn = document.createElement('button');
		createTaskBtn.textContent = 'Create Task';
		createTaskBtn.classList.add('btn');
		createTaskBtn.classList.add('primary-btn');
		createTaskBtn.dataset.idx = index;
		createTaskBtn.addEventListener('click', openTaskFormDialog);
		btnContainer.appendChild(createTaskBtn);

		const deleteProjectBtn = document.createElement('button');
		deleteProjectBtn.textContent = 'Delete Project';
		deleteProjectBtn.classList.add('btn');
		deleteProjectBtn.classList.add('delete-btn');
		deleteProjectBtn.addEventListener('click', deleteProject);
		btnContainer.appendChild(deleteProjectBtn);

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
		clearContainerItems(projectListContainer);
		const projectList = project.getProjectList()

		projectList.forEach((project, idx) => {
			let div = document.createElement('div');
			div.textContent = project.title;
			div.dataset.idx = idx; 
			div.classList.add('project-tab');
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

	projectDialog.addEventListener('click', closeDialog);
	taskDialog.addEventListener('click', closeDialog);
	taskDetailDialog.addEventListener('click', closeDialog);
	addProjectBtn.addEventListener('click', openProjectFormDialog);
	createTaskBtn.addEventListener('click', createTask);
	projectTitle.addEventListener('input', (e) => countLetters(e, projectTitleCounter, 30));
	projectDesc.addEventListener('input', (e) => countLetters(e, projectDescCounter, 50));
	createProjectBtn.addEventListener('click', createProject);

})();	