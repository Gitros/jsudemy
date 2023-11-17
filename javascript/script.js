let todoInput; // miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo; // info o braku zadań / konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowe elementy do listy
let ulList; // lista zadań, tagi UL

const main = () => {
    prepareDOMElemnts();
    prepareDomEvents();
}

const prepareDOMElemnts = () => {
    todoInput = document.querySelector('.todoInput');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}

const prepareDomEvents = () => {
    //nadajemy nasłuchiwanie
}

document.addEventListener('DOMContentLoaded', main);