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


//elementi DOM dell'offcanvas
const offcTaskTitle = document.getElementById('offc-task-title').value;
const offcTaskPriority = document.getElementById('offc-task-priority').value;
const offcTaskDate = document.getElementById('offc-task-date').value;
const offcTaskNotes = document.getElementById('offc-task-notes').value;

const offcanvasClose = document.getElementById('offcanvas-close');
const offcanvasAdd = document.getElementById('offcanvas-add');

//elementi del DOM della task
const taskText = document.querySelector(".task-text");
const taskPriority = document.querySelector(".task-priority");
const taskDate = document.querySelector(".task-date");
const taskNotes = document.querySelector(".task-notes");


//sezione nel main 
const taskContent = document.getElementById("task-content")
const newTodoItem = document.createElement('article');

function addTask() {
    //Programmo i nuovi elementi
    const newTodoItem = document.createElement("article");

    const innerTaskText = document.createElement("p");
        innerTaskText.classList.add("font-semibold");
        innerTaskText.innerHTML = offcTaskTitle;

    const innerTaskPriority = document.createElement("p");
        innerTaskPriority.classList.add("italic");
        innerTaskPriority.innerHTML = offcTaskPriority;

    const innerTaskDate = document.createElement("p");
        innerTaskDate.classList.add("text-slate-400");
        innerTaskDate.innerHTML = offcTaskDate;

    const innerTaskNotes = document.createElement("p");
    const innerSticky = document.createElement("button");
        innerSticky.classList.add("rounded-full", "hover:bg-slate-100", "p-1");
        innerSticky.innerHTML = `<i class="fa-solid fa-note-sticky"></i>`;

    const innerTaskActions = document.createElement("p");


    newTodoItem.classList.add("bg-white", "flex", "justify-between", "px-8", "py-4", "mb-3");

    // Aggiungo gli elementi figlio al nuovo elemento
    newTodoItem.appendChild(innerTaskText);
    newTodoItem.appendChild(innerTaskPriority);
    newTodoItem.appendChild(innerTaskDate);
    newTodoItem.appendChild(innerTaskNotes);
    newTodoItem.appendChild(innerTaskActions);

    // Aggiungo il nuovo elemento al contenitore desiderato
    taskContent.appendChild(newTodoItem);
}

offcanvasAdd.addEventListener('click', addTask)