let score = 0;



const add = (x, y) => {
    score = x + y;
    if (score % 2 === 0) {
        even(score);
    } else {
        odd(score);
    }
}

const even = score => {
    console.log(`Liczba ${score} jest parzysta`);
}
const odd = score => {
    console.log(`Liczba ${score} jest nie parzysta`);
}

add(2, 4)