const liItems = document.querySelectorAll('li');
const liItem3 = document.querySelector('li:nth-child(3)');

let number = 1;

for (const liItem of liItems) {
    liItem.textContent = number;
    liItem.dataset.id = number
    number++;
}

console.log(liItem3);

console.log(liItem3.closest('.wrapper'));
