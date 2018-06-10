const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

tasks.forEach((item) => {
	const newListItem = document.createElement('li');
	newListItem.textContent = item;
	document.querySelector('ul').appendChild(newListItem);
	newListItem.addEventListener("click", function () {	
		newListItem.classList.toggle("done")  


		// if (newListItem.className === '') {
		// 	newListItem.className = 'undone'
		// }
		// else {
		// 	newListItem.className = 'undone'
		// }
		// if (newListItem.className = 'done' ||
		// 	e.style.display == '') e.style.display = 'none';
		// else e.style.display = 'block';

	});
})