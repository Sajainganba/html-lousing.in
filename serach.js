
    // Add your search functionality here
function search() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var elements = document.getElementsByClassName("book-list")[0].getElementsByTagName("li");

    for (var i = 0; i < elements.length; i++) {
        var title = elements[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        var author = elements[i].getElementsByTagName("p")[0].innerText.toLowerCase();
        
        if (title.includes(input) || author.includes(input)) {
            elements[i].style.display = "block";
        } else {
            elements[i].style.display = "none";
        }
    }
}