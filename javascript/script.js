const arrowFunction = () => {
    //arrow function looks like that
}

const test = (name) => {
    console.log(`mam na imię ${name}`);
}

test('jakub');

const test2 = name => console.log(`mam na imię ${name}`);

test2('jakubs');

const test3 = (name, age) => console.log(name, age);

test3('name', '123');

function add(num1, num2) {
    return num1 + num2;
}

const days = ['pon', 'wtor', 'srd']

const days2 = days.forEach(function (day) {
    console.log(day);
})

const days3 = days.forEach(day => console.log(day));