
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
if(!(offcTaskTitle.value)|| !(offcTaskPriority.value)|| !(offcTaskDate.value)){
    alert("Please insert all values!")
}else{   //Programmo i nuovi elementi
        const newTodoItem = document.createElement("article");
        newTodoItem.classList.add("bg-white", "flex", "justify-between", "px-8", "py-4", "mb-3");

        //TITOLO DELLA TASK
        const innerTaskText = document.createElement("p");
            innerTaskText.classList.add("font-semibold","max-w-[150px]");
            innerTaskText.innerHTML = offcTaskTitle.value;

        //PRIORITA' DELLA TASK
        const innerTaskPriority = document.createElement("p");
        // DO' UN COLORE DIVERSO AL TESTO IN BASE ALLA PRIORITA' DELLA TASK
            innerTaskPriority.innerHTML = offcTaskPriority.value;
            innerTaskPriority.classList.add("italic");
                if(offcTaskPriority.value === "low"){
                    innerTaskPriority.classList.add("text-yellow-500");
                }else if(offcTaskPriority.value === "middle"){
                    innerTaskPriority.classList.add("text-yellow-700");
                }else {
                    innerTaskPriority.classList.add("text-red-600");
                }

        // DATA DELLA TASK
        const innerTaskDate = document.createElement("p");
            innerTaskDate.classList.add("text-slate-400");
            innerTaskDate.innerHTML = offcTaskDate.value;


        // NOTE DELLA TASK
        const innerTaskNotes = document.createElement("section")
            innerTaskNotes.classList.add("task-notes", "relative");

        const noteDisplayEl = document.createElement("div")
                noteDisplayEl.classList.add("z-10", "w-60", "h-52", "bg-stone-100", "text-black", "italic", "absolute", "right-4","top-4", "rounded-xl", "p-6", "note-display","hidden") //aggiungere qui le classi del div)
        
        const noteDisplayTextEl = document.createElement("p")
                noteDisplayTextEl.innerHTML = offcTaskNotes.value;
                
        const innerSticky = document.createElement("button");
                innerSticky.classList.add("rounded-full", "hover:bg-slate-100", "p-1", "display-notes");
                innerSticky.innerHTML = `<i class="fa-solid fa-note-sticky"></i>`;

        //funzione che mostra le note relative ad una task CHE AGGIUNGO DINAMICAMENTE
        innerSticky.addEventListener('click', function(){
            noteDisplayEl.classList.toggle("hidden")
        })
        
        noteDisplayEl.appendChild(noteDisplayTextEl);
        innerTaskNotes.appendChild(noteDisplayEl);
        innerTaskNotes.appendChild(innerSticky);
        
        //AZIONI DELLA TASK
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
}
    
//funzione che mostra le note relative ad una task GIA' PRESENTE NELL'HTML (da cancellare più avanti)
const displayNotesBtn = document.querySelector(".display-notes");
const noteDisplay = document.querySelector(".note-display")
displayNotesBtn.addEventListener('click', function(){
        noteDisplay.classList.toggle("hidden");
    })

//seleziono il bottone per aggiungere la task e applico un event listener
const addTaskBtn = document.getElementById('add-task');
addTaskBtn.addEventListener('click', addTaskDisplay)
offcanvasAdd.addEventListener('click', addTask)