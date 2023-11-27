const b1 = document.querySelector('.first')
const b2 = document.querySelector('.second')
const b3 = document.querySelector('.third')
const p = document.querySelector('p');

function Meal(name, price) {
    this.name = name;
    this.price = price;
}

const meal1 = new Meal('kluski', '35zl');
const meal2 = new Meal('banan', '20zl');
const meal3 = new Meal('burger', '55zl');


Meal.prototype.menu = function () {
    console.log(`${this.name} kosztuje ${this.price} `);
}


b1.addEventListener('click', () => meal1.menu())
b2.addEventListener('click', () => meal2.menu())
b3.addEventListener('click', () => meal3.menu())