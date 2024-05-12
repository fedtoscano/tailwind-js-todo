//FUNZIONE CHE ATTIVA L'OFF CANVAS

const addTaskBtn = document.getElementById('add-task');
//definisco la funzione AddTask
function addTaskDisplay(){
    document.body.classList.toggle("opacity-40");
    const newTask= document.getElementById('new-task');

    newTask.classList.toggle("hidden")
}

//seleziono il bottone e applico un event listener
addTaskBtn.addEventListener('click', addTaskDisplay)
