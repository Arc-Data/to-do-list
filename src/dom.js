const DOMController = (() => {
	const projects = document.querySelector('.projects-folder');	
	const createBtn = document.querySelector('#create-project-btn')
	const dialog = document.querySelector('dialog');

	createBtn.addEventListener('click', openDialog);

	const openDialog = () => {
		console.log("hell good")
		dialog.showModal()
	}

})()

