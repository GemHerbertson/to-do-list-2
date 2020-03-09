const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");

button.addEventListener("click", () => {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    // console.log(listItem);
    input.value = "";
})

