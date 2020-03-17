// html identifiers
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");

// const li = document.getElementById("aListItem").hidden = true;
// const deleteButton = document.getElementById("deleteBtn").hidden = true;

let list = document.getElementsByTagName("ul")[0];



// functions
addButton.addEventListener("click", () => {
    let listItem = document.createElement("li");
    // deleteButton = document.createElement("button");
    // listItem.appendChild(deleteButton);

    if (input.value === "") {
        alert("Oops, you forgot something!");

    } else {
        listItem.textContent = input.value;

        let optionsButtons = 
        document.getElementById("buttons").cloneNode(true);
        optionsButtons.childNodes[1].addEventListener('click', deleteListItem, false); 
        optionsButtons.childNodes[3].addEventListener('click', completeListItem, false); 

        listItem.appendChild(optionsButtons);
        list.appendChild(listItem);
        
        input.value = ""; 
    } 
})

const deleteListItem = () => {
    let li = this.parentNode.parentNode;
    li.remove();
}

const completeListItem = () => {
    let li = this.parentNode.parentNode;
    li.classList.add("Done");
}


// list.addEventListener("click", (event) => {
//     // if(event.target.tagName === "LI") {
//     //     let li = event.target;
//     //     let ul = li.parentNode;
//     //     ul.removeChild(li);
//     // }
//     deleteTask()
// });

// const deleteTask = () => {
//     if(event.target.tagName === "LI") {
//         let li = event.target;
//         let ul = li.parentNode;
//         ul.removeChild(li);
//     }
// }




// var input = document.getElementById('userInput');
// var enterButton = document.getElementById('enter');

// var ul = document.querySelector('ul');

// function inputLength(){
//  return input.value.length;
// };

// function listLength(){
//   return item.length;
// }

// function createListElement(){
//   var li = document.createElement('li');
//   li.appendChild(document.createTextNode(input.value));
//   //makes text node 
  
//   var clonedButton = 
//      document.getElementById("buttons").cloneNode(true);
//       clonedButton.childNodes[1].addEventListener('click', deleteListItem, false); 
//       clonedButton.childNodes[3].addEventListener('click', completeListItem, false); 
  
//   li.appendChild(clonedButton);
//   ul.appendChild(li);
//   input.value = "";
  
// }

// function deleteListItem(){
//   	var li = this.parentNode.parentNode;
//     li.remove();
// }

// function completeListItem(){
//    var li = this.parentNode.parentNode;
//   li.classList.add("done");
  
// }

// function addListAfterClick(){
//   if(inputLength() > 0){
//     createListElement();
//   }
// }
// // Hit enter key and create list
// function addAfterPress(event){
//   if(inputLength() > 0 && event.which === 13){
//     createListElement();
//   }
// }



// enterButton.addEventListener('click', addListAfterClick);
// input.addEventListener('keypress', addAfterPress);