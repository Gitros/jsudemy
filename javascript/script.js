//spread

const arr = [1, 2, 3, 4]
console.log(arr);
console.log(...arr);

//rest

const numbers = (x, y, ...z) => {
    console.log(x, y, z);

    console.log(z.map(el => el * 2));
}

numbers(13, 468, 468, 4, 9215, 2, 1, 35, 24, 43);
