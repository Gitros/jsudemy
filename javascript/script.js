const numbers = [1, 2, 3, 4]
const food = ['pizza', 'spaghetti', 'onions', 'fries'];
const menu = numbers.concat(food);

console.log(menu);

const menu2 = [...numbers, ...food]
console.log(menu2);