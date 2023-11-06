// //getElementById
const test = document.getElementById('item');

// //getElementsByTagName
 const test2 = document.getElementsByClassName('ul');

// //getElementsByClassName
 const test3 = document.getElementsByClassName('test');

//querySelector(ES6)
const test4 = document.querySelector('li');

const ulList = document.querySelector('ul');
console.log(ulList);

const liItem = ulList.querySelector('li');
console.log(liItem);

//querySelectorAll (ES6)

const liItems = document.querySelectorAll('li.test');
console.log(liItem);



//Żywe kolekcje, czyli qSA vs getElementsByTag / ClassName

const newLi = document.createElement('li');
ulList.appendChild(newLi).textContent = '😎';
console.log(liItems.length);