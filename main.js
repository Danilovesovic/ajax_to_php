window.addEventListener('load', run);
let tbody = document.querySelector('tbody');
let btn = document.querySelector('button');
let newName = document.querySelector('#newName');


btn.addEventListener('click',sendToDb);

function sendToDb() {
	let newVal = newName.value;
	let xml = new XMLHttpRequest();
	let fd = new FormData();
	fd.append('name',newVal);
	xml.open('POST','save.php');

	xml.onreadystatechange = function () {
		if (xml.readyState == 4 && xml.status == 200) {
			run();
		}
	}

	xml.send(fd);
}


function run() {
	let xml = new XMLHttpRequest();
	xml.open('GET', 'readAll.php');
	xml.onreadystatechange = function() {
		if (xml.readyState == 4 && xml.status == 200) {
			display(xml);
		}
	}
	xml.send();
}



function display(xml) {
	tbody.innerHTML = "";
	let data = JSON.parse(xml.responseText);
	console.log(data);
	let text = ``;

	data.forEach(function (e) {
		text += `
<tr>
	<td>${e.id}</td>
	<td>${e.name}</td>
</tr>
		`;
	})
	tbody.innerHTML = text;
}