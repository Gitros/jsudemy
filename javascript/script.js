let num = 10;
let numbers = [];

for (let i = 0; i < num; i++) {
    numbers.push(i);
};

const check = (x) => {
    if ((x % 3 === 0) && (x !== 0)) {
        console.log(`${x} jest podzielne przez 3`);
    } else {
        console.log(`${x} nie jest podzielne przez 3 lub ${x} = 0`);
    }
}

numbers.forEach(check);