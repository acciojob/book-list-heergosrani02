function addList() {
	var table = document.getElementById("book-list");
	var title = document.getElementById("title");
	var author = document.getElementById("author");
	var isbn = document.getElementById("isbn");

	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "X";
	deleteButton.className = "delete";
	deleteButton.style.backgroundColor = "red";
	deleteButton.style.border = "none";
	deleteButton.style.color = "white";
	
	
	var row = table.insertRow(-1);
	row.insertCell(0).innerHTML = title.value;
	row.insertCell(1).innerHTML = author.value;
	row.insertCell(2).innerHTML = isbn.value;
	row.insertCell(3).appendChild(deleteButton);

	deleteButton.addEventListener('click', function(e) {
    var row = e.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
});

	title.value = " ";
	author.value = " ";
	isbn.value = " ";
}