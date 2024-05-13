const contador = document.querySelector('#contador')

function addTask(){
    const taskText = document.querySelector('#new__task').value

    if (taskText !== ""){
        const listOfTasks = document.querySelector('.list__of__tasks')

        //Se escribe el texto de la tarea en el elemento que acabamos de crear (newTask)
        listOfTasks.innerHTML += /*html*/`    
        <li>
            <p>${taskText}</p>
            
            <div class="status">
                <i class="bi bi-trash3-fill icono_borrar" onclick = "deleteTask(event)"></i>
                <input type="checkbox">
            </div>
        </li>`

        //Contador de tareas

        // contador.innerHTML = listOfTasks.children.length

        //Otra forma de contar las tasks: Se convierte el se escribe en el span 
        contador.innerHTML = Number(contador.innerHTML)+1
        
        
        //Limpiamos el input
        document.querySelector('#new__task').value = ""
    }
}

// ───▄▄▄▄▄▄─────▄▄▄▄▄▄
// ─▄█▓▓▓▓▓▓█▄─▄█▓▓▓▓▓▓█▄
// ▐█▓▓▒▒▒▒▒▓▓█▓▓▒▒▒▒▒▓▓█▌
// █▓▓▒▒░╔╗╔═╦═╦═╦═╗░▒▒▓▓█
// █▓▓▒▒░║╠╣╬╠╗║╔╣╩╣░▒▒▓▓█
// ▐█▓▓▒▒╚═╩═╝╚═╝╚═╝▒▒▓▓█▌   <3
// ─▀█▓▓▒▒░░░░░░░░░▒▒▓▓█▀
// ───▀█▓▓▒▒░░░░░▒▒▓▓█▀
// ─────▀█▓▓▒▒░▒▒▓▓█▀
// ──────▀█▓▓▒▓▓█▀
// ────────▀█▓█▀
// ──────────▀

// setInterval(function)
document.querySelector("#new__task").addEventListener("keydown", function(evento) {
    if (evento.key == "Enter") {
      addTask();
    }
});

function deleteTask(event){

    //Event.target es la basura
    //event.target.parentElement = padre de la basura
    // event.target.parentElement.parentElement = padre del padre de la basura

    event.target.parentElement.parentElement.remove()
    console.log(event.target.parentNode)
    // target accede al elemento que disparo el evento
    // remove() elimina el nodo
    // children accede a los hijos de ese nodo
    // parentNode accede al padre de ese nodo

    contador.innerHTML = Number(contador.innerHTML)-1

    
}

// el target es el boton, el gatillo es el evento 
// span ? te acordas para que era?


