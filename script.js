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
	});
})

const button = document.querySelector("#add-todo")

button.addEventListener("click", function(event) {
	if (document.querySelector('#item').value !== '') {
	var item = document.querySelector('#item').value
	const newLi = document.createElement('li')
	newLi.textContent = item 
	document.querySelector('ul').appendChild(newLi)
	}
})

const input = document.querySelector("#item")

input.addEventListener("keypress", function(event) {
	if (document.querySelector('#item').value !== '' && event.charCode ===13 ) {
	var item = document.querySelector('#item').value
	const newLi = document.createElement('li')
	newLi.textContent = item 
	document.querySelector('ul').appendChild(newLi)
	}
})





