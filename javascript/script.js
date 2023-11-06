const body = document.querySelector('body');
const ul = document.createElement('ul');
const li = document.createElement('li');

body.appendChild(ul);

for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    ul.append(li);
    li.textContent = `${i}`;
}

let lastLi = ul.lastChild;
lastLi.textContent = 'Jestem ostatnim elementem';
lastLi.style.backgroundColor = 'blue';
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '48px';

console.log(lastLi);
