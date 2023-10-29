let numbers = [5, 8, 10, 23, 48, 60];

for (let divine of numbers) {
    console.log(divine / 5);
}

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(`%cLiczba ${number} jest parzysta`);
    } else {
        console.log(`%cLiczba ${number} jest nieparzysta`), 'background-color: red';
    }
}