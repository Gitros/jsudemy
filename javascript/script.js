// Prototype

function User(name, age) {
    this.name = name;
    this.age = age;
}

const newUser = new User('Klaudia', 23);
const newUser2 = new User('Lily', 34);
const newUser3 = new User('Majek', 45);

console.log(newUser, newUser2, newUser3);

User.prototype.hello = function () {
    console.log(`Cześć ${this.name}`);
}
newUser.hello();