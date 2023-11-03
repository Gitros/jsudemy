const numbers = [1, 5, 13, 26, 48];

const mapNumbers = numbers.map(number => number * 5);

console.log(mapNumbers);

for (number of mapNumbers) {
    if (number % 2 === 0) {
        console.log(`liczba parzysta ${number}`);
    }
    else {
        console.log(`liczba nie parzysta ${number}`);
    }
}
