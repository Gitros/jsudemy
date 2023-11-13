const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 36;

const sizeup = () => {
    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
}
const sizedown = () => {
    if (fontSize <= 21) return;
    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
}

const colorp = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    p.style.color = `rgb(${r},${g},${b})`;
}

console.log(colorp);

sizeUp.addEventListener('click', sizeup);
sizeDown.addEventListener('click', sizedown);
color.addEventListener('click', colorp);