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
        ulList.append(newTodo);
        todoInput.value = '';
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'wpisz treść zadania!'
    }
}



document.addEventListener('DOMContentLoaded', main);