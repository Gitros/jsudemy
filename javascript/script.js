function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    console.log(`Cześć, jestem ${this.name}!`);
}

Person.prototype.showAge = function () {
    console.log(`Mam ${this.age} lat/a`);
}

const person1 = new Person('Majek', 23);

person1.sayHi();
person1.showAge();

// ====================

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Cześć, jestem ${this.name}!`);
    }

    showAge() {
        console.log(`Mam ${this.age} lat/a`);
    }
}

const person2 = new Person2('ania', 23);

console.log(person2);

function Gra(name, version) {
    this.name = name;
    this.version = version;
}

Gra.prototype.newGame = function () {
    console.log(`Witaj w nowej grze ${this.name}!`);
}

Gra.prototype.newVersion = function () {
    console.log(`Nowy wymiar gry w wersji ${this.version}`);
}

const gra = new Gra('Skyrim', 5);

gra.newGame();
gra.newVersion();

// ===============

class Gra2 {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }

    newGame2() {
        console.log(`Witaj w nowej grze ${this.name}!`);
    }
    newVersion2() {
        console.log(`Nowy wymiar gry w wersji ${this.version}`);
    }
}

const gra2 = new Gra2('Wiedzmin', 3);
gra2.newGame2()
gra2.newVersion2()