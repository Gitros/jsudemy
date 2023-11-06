const ulList = document.createElement('ul');
const liItem = document.createElement('li');
const div = document.querySelector('div');
const p = document.createElement('p');
const essa = document.querySelector('essa');

liItem.textContent = 'cześć';
p.textContent = 'elo';

div.appendChild(p)
document.body.appendChild(ulList);
ulList.appendChild(liItem);