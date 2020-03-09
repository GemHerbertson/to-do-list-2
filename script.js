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

list.addEventListener("click", (event) => {
    if(event.target.tagName == "LI") {
        let li = event.target;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
})



