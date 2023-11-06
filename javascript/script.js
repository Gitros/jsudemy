const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const square = document.querySelector('.square');

const f1 = () => {
    console.log("cześć");
}

const f2 = () => {
    square.style.backgroundColor = 'red';
}
const f3 = () => {
    square.style.backgroundColor = 'blue';
}
const f4 = () => {
    p2.classList.toggle('show');
    p2.classList.toggle('show');
}

btn1.addEventListener('dblclick', f1)
square.addEventListener('mouseover', f2);
square.addEventListener('mouseout', f3);
btn2.addEventListener('click', f4)



