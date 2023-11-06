const div = document.querySelector('div');
const p = document.createElement('p');
const headingTwo = document.createElement('h2');

// div.appendChild(p);
// div.appendChild(headingTwo);

div.append(p, headingTwo, 'cześć');