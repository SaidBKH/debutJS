
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const taskContainer = document.qssuerySelector("#todoCards");


addBtn.addEventListener('click',addTask);

function addTask(){
    const newTask = taskCard.cloneNode(true)
    const newTextArea = newTask.qssuerySelector('.task')

    newTextArea.value = "New Task"
    taskContainer.appendChild(newTask)

}

