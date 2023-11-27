// konstruktor
function User(name, age) {
    this.name = name;
    this.age = age;

    this.hello = function () {
        console.log(`Cześć ${this.name}`);
    }
}

const user = {
    name: 'Klaudia',
    age: 23,
}
console.log(user.name);

const newUser = new User('Klaudia', 23);
const newUser2 = new User('Lily', 34);
console.log(newUser);

newUser2.hello()