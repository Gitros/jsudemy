// console.log(this);

//this w zwykłej funkcji wskazuje na obiekt, który jest na lewo od kropki

const person = {
    name: 'Lisa',
    'fav-meal': 'schabowy',
    address: {
        city: 'Kraków',
        'zip-code': '00-000',
        showCity: function () {
            console.log(this);
        }
    }
}

person.address.showCity()

//this w konstruktorze wskazuje na obiekt, stworzony na podstawie konstruktora

function Food(name) {
    this.name = name
}

const meal = new Food('schabowy');
const meal2 = new Food('pepsi');

console.log(meal, meal2);