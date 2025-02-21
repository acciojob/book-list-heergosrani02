document.getElementById("submit").addEventListener("click", function() {
        // Get input values
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let isbn = document.getElementById("isbn").value;

        // Validate input fields
        if (title === "" || author === "" || isbn === "") {
            alert("Please fill all fields");
            return;
        }

        // Create a new row in the table
        let table = document.getElementById("book-list");
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete btn btn-danger btn-sm">X</button></td>
        `;

        table.appendChild(row);

        // Clear input fields after adding a book
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    });

    // Event delegation for delete buttons
    document.getElementById("book-list").addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.remove();
        }
    });