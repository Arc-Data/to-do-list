import './style.css';
import todo from './todo.js';
import renderProjects from './projects.js';

const DOMController = (() => {
	const projects = document.querySelector('.projects-folder');	
	const createBtn = document.querySelector('#create-project-btn')
	const dialog = document.querySelector('dialog');

	const openDialog = () => {
		dialog.showModal();
	}

	const closeDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	dialog.addEventListener('click', closeDialog);
	createBtn.addEventListener('click', openDialog);
})()

