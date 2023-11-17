let todoInput; // miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo; // info o braku zadań / konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL
let newTodo; //nowo dodany LI nowe zadanie

const main = () => {
    prepareDOMElemnts();
    prepareDomEvents();
}

const prepareDOMElemnts = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}

const prepareDomEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        createToolsArea();

        ulList.append(newTodo);

        todoInput.value = '';
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class = "fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times">';

    toolsPanel.append(completeBtn, editBtn, deleteBtn);
}



document.addEventListener('DOMContentLoaded', main);