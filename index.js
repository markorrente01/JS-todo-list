// get the ui vars
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const clearTask = document.querySelector('button');
const taskList = document.querySelector('.task__list');

let allTodos = getTodos();
updateTodoList();

// add task
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTask();
})
function addTask() {
    const inputValue = taskInput.value.trim();
    if (inputValue.length > 0) {
        allTodos.push(inputValue);
        updateTodoList();
        saveToLs();
        taskInput.value = '';
    }
}
function updateTodoList(){
    taskList.innerHTML = '';
    allTodos.forEach(todoText => {
        taskList.appendChild(createLi(todoText));
    });
}
function createLi(todoText) {
    const li = document.createElement('li');
        li.innerHTML = `${todoText} <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#ffab01">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>`

        li.querySelector('svg').addEventListener('click', ()=>{
            delItem(todoText); // clears from local storage and updates the list;
            
        })
    return li;
}
function delItem(todoText) {
    allTodos = allTodos.filter(filterTodo=> todoText !== filterTodo);
    saveToLs();
    updateTodoList();
}
// filter list items
filterInput.addEventListener('keyup', ()=>{
    const filterValue = filterInput.value.toLowerCase();
    document.querySelectorAll('li').forEach(filteredTodo=>{
        const txt = filteredTodo.textContent;
        if (txt.toLowerCase().indexOf(filterValue)!==-1) {
            filteredTodo.style.display = 'flex';
        } else {
            filteredTodo.style.display = 'none';
        }
    })
})
// clear task
clearTask.addEventListener('click', ()=>{
    taskList.innerHTML = '';
    //clear from local storage
    localStorage.clear();
})
function saveToLs() {
    localStorage.setItem('todos', JSON.stringify(allTodos));
}
function getTodos() {
    const todo = JSON.parse(localStorage.getItem('todos')) || [];
    return todo;
}

// label correction
const inputLabel = document.querySelector('#task__label');
const filterLabel = document.querySelector('#filterLabel');
taskInput.addEventListener('blur', ()=>{
    if (taskInput.value === '') {
        inputLabel.style.top = '50%';
    } else {
        inputLabel.style.top = '0';
    }
})
taskInput.addEventListener('focus', ()=>{
    inputLabel.style.top = '0'
})
filterInput.addEventListener('blur', ()=>{
    if (filterInput.value === '') {
        filterLabel.style.top = '50%';
    } else {
        filterLabel.style.top = '0';
    }
})
filterInput.addEventListener('focus', ()=>{
    filterLabel.style.top = '0'
})