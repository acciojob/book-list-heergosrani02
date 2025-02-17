function addList() {
	var table = document.getElementById("book-list");
	var title = document.getElementById("title");
	var author = document.getElementById("author");
	var isbn = document.getElementById("isbn");
	
	var row = table.insertRow(-1);
	row.insertCell(0).innerHTML = title.value;
	row.insertCell(1).innerHTML = author.value;
	row.insertCell(2).innerHTML = isbn.value;

	title.value = " ";
	author.value = " ";
	isbn.value = " ";
}