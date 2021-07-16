document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  const li = document.createElement("li");
  
  //A method that takes input value as a parameter and insert the value into a list.
  function createLists(task){
    li.innerHTML += `${task} <button data-action="delete"> X </delete>`;
    taskList.appendChild(li);
  }

  //Challenge2: Priority selector
  //Create dropdwon right after input tag
  const select = document.createElement("select");
  select.name = "priority";
  select.setAttribute("id", "dropDownSelector");
  for(let i = 0; i < 4; i++){
    const option = document.createElement("option");
    switch(i){
      case 0: option.value = "";
              option.innerHTML = "Select priority level";
              select.appendChild(option);
        break;
      case 1: option.value = "High";
              option.innerHTML = "URGENT";
              select.appendChild(option);
        break;
      case 2: option.value = "Middle";
              option.innerHTML = "Needs to be done";
              select.appendChild(option);
        break;
      case 3: option.value = "Low";
              option.innerHTML = "No rush";
              select.appendChild(option);
        break;
      default: alert("Select priority level");
        break;
    }
  }
  const taskEntry = document.querySelector("#new-task-description");
  taskForm.insertBefore(select, taskEntry.nextSibling);
  //Change list color by priority
  function changeListColor(chosenPriority){
    switch(chosenPriority){
      case "High": li.style.backgroundColor = "red";
        break;
      case "Middle": li.style.backgroundColor = "yellow";
        break;
      case "Low": li.style.backgroundColor = "green";
        break;
      default: li.style.backgroundColor = "orange";
        break;
    }
  }

  //Add a eventLisner to the form (not submit btn), when the form is submitted, prevent from posting request and get input value from textInput and pass it to createList.
  taskForm.addEventListener("submit", function(e){
    e.preventDefault();
    const inputValue = document.querySelector("#new-task-description").value;
    const selectedPriority = document.querySelector("select").value;
    createLists(inputValue);
    changeListColor(selectedPriority);
    taskForm.reset();
  });

  //Challenge1: A delete function
  //Add a eventListner to the ul list and check if dataset is equal to delete and delete the li tag itself.
  taskList.addEventListener("click", function(e){
    if(e.target.dataset.action === "delete"){
      e.target.parentElement.remove();
    }
  });
});