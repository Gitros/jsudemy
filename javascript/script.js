// declaration of a function

function test() {
    console.log('cześć');
}

test();

// functional expression

const helloWorld = function () {
    console.log('cześć! 123');
}

helloWorld();

// function with arguments

function add(x, y) {
    return x + y;
}

add(5, 7);

const name = function (name, age) {
    console.log(`Cześć mam na imie ${name} i mam ${age} lat. `);
}

name('jakub', 25);