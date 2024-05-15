
const offcanvasClose = document.getElementById('offcanvas-close');
const offcanvasAdd = document.getElementById('offcanvas-add');

//elementi del DOM della task
const taskText = document.querySelector(".task-text");
const taskPriority = document.querySelector(".task-priority");
const taskDate = document.querySelector(".task-date");
const taskNotes = document.querySelector(".task-notes");

//sezioni nel main 
const taskContent = document.getElementById("task-content")
const newTodoItem = document.createElement('article');

//funzione che mostra l'offcanvas della task
function addTaskDisplay(){
    const newTask= document.getElementById('new-task');
    const fullSite= document.querySelector(".fullsite")
    fullSite.classList.toggle("opacity-btn");
    newTask.classList.toggle("hidden")
}

const offcTaskTitle = document.getElementById('offc-task-title');
const offcTaskPriority = document.getElementById('offc-task-priority');
const offcTaskDate = document.getElementById('offc-task-date');
const offcTaskNotes = document.getElementById('offc-task-notes');

//funzione che aggiunge la task nel DOM
function addTask() {
    //Programmo i nuovi elementi
    const newTodoItem = document.createElement("article");
    newTodoItem.classList.add("bg-white", "flex", "justify-between", "px-8", "py-4", "mb-3");

    const innerTaskText = document.createElement("p");
        innerTaskText.classList.add("font-semibold","max-w-[150px]");
        innerTaskText.innerHTML = offcTaskTitle.value;

    const innerTaskPriority = document.createElement("p");
        innerTaskPriority.classList.add("italic");
        innerTaskPriority.innerHTML = offcTaskPriority.value;

    const innerTaskDate = document.createElement("p");
        innerTaskDate.classList.add("text-slate-400");
        innerTaskDate.innerHTML = offcTaskDate.value;

    const innerTaskNotes = document.createElement("p");
    const innerSticky = document.createElement("button");
            innerSticky.classList.add("rounded-full", "hover:bg-slate-100", "p-1");
            innerSticky.innerHTML = `<i class="fa-solid fa-note-sticky"></i>`;
    innerTaskNotes.appendChild(innerSticky);
    
    const innerTaskActions = document.createElement("p");  
        const innerTaskIcon=document.createElement("button");
            innerTaskIcon.classList.add("rounded-full", "hover:bg-slate-100", "p-1");
            innerTaskActions.innerHTML= `<i class="fa-solid fa-pen"></i>`;
            
        const innerTaskIcon2=document.createElement("button");
            innerTaskIcon2.classList.add("rounded-full", "hover:bg-slate-100", "p-1");
            innerTaskIcon2.innerHTML= `<i class="fa-solid fa-trash-can"></i>`;
    innerTaskActions.appendChild(innerTaskIcon);
    innerTaskActions.appendChild(innerTaskIcon2);


    // Aggiungo gli elementi figlio al nuovo elemento
    newTodoItem.appendChild(innerTaskText);
    newTodoItem.appendChild(innerTaskPriority);
    newTodoItem.appendChild(innerTaskDate);
    newTodoItem.appendChild(innerTaskNotes);
    newTodoItem.appendChild(innerTaskActions);

    // Aggiungo il nuovo elemento al contenitore desiderato
    taskContent.appendChild(newTodoItem);
    
    //chiudo la finestra
    addTaskDisplay()

    //resetto i valori a 0
    offcTaskTitle.value = ""
    offcTaskPriority.value = ""
    offcTaskDate.value = ""
    offcTaskNotes.value = ""
}



//seleziono il bottone per aggiungere la task e applico un event listener
const addTaskBtn = document.getElementById('add-task');
addTaskBtn.addEventListener('click', addTaskDisplay)
offcanvasAdd.addEventListener('click', addTask)