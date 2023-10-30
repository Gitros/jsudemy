const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

let numbers2 = numbers.slice(2)
console.log(numbers2);

let numbers3 = numbers.slice(-3);
console.log(numbers3);

const randomStuff = colors.splice(-2);
console.log(randomStuff);
console.log(colors);

const newCars = cars.splice(2, 4, 'test')
console.log(newCars);
console.log(cars);