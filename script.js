// html variables
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
let list = document.getElementsByTagName("ul")[0];

// functions
addButton.addEventListener("click", () => {
    if (input.value === "") {
        alert("Oops, you forgot something!");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = input.value;
        list.appendChild(listItem);
        input.value = ""; 

        let deleteButton = document.createElement("button");
        listItem.appendChild(deleteButton);
    } 
});



deleteButton.addEventListener("click", (event) => {
    if(event.target.tagName == "LI") {
        let li = event.target;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
})

// list.addEventListener("click", (event) => {
//     if(event.target.tagName == "LI") {
//         let li = event.target;
//         let ul = li.parentNode;
//         ul.removeChild(li);
//     }
// })