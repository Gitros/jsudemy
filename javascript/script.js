const numbers = [0.5, 4, 'abc'];
const names = ['lisa', 'lily', 'adam', 'przemek'];

numbers.forEach(num => console.log(num * num));

const bigNames = names.map(name => name.toUpperCase());
console.log(bigNames);

const showBigNames = (names) => {
    console.log(names.toUpperCase());
}

names.forEach(showBigNames)

