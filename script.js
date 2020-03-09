// html variables
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
let list = document.getElementsByTagName("ul")[0];


// functions
button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Oops, you forgot something!");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = input.value;
        list.appendChild(listItem);
        input.value = ""; 
    } 
});



