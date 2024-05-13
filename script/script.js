//FUNZIONE CHE ATTIVA L'OFF CANVAS
const addTaskBtn = document.getElementById('add-task');
//definisco la funzione AddTask
function addTaskDisplay(){
    const fullSite= document.querySelector(".fullsite")
    fullSite.classList.toggle("opacity-btn");
    const newTask= document.getElementById('new-task');
    newTask.classList.toggle("hidden")
}

//seleziono il bottone e applico un event listener
addTaskBtn.addEventListener('click', addTaskDisplay)
