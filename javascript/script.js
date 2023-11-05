const name = 'lisa';

const test = () => {
    const name = 'Lily';
    console.log(`Name w funkcji - ${name}`);
    const age = 23;
    console.log(age);

    const test2 = () => {
        console.log('---');
        console.log(name);
        console.log(age);
        console.log('---');
    }
    test2()

    const test3 = () => {

    }
    test3();
}
test();

console.log(`Name poza funkcją - ${name}`);
