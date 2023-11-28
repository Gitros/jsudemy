const checkAge = age => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve();
        } else {
            reject()
        }
    })
}

const doubleCheck = () => {
    return new Promise((resolve, reject) => {
        console.log('sprawdzam jeszcze raz..');
        setTimeout(() => {
            resolve('Faktycznie, wiek się zgadza.')
        }, 1000)
    })
}

// checkAge(50)
//     .then(() => {
//         console.log('możesz wejść...');
//         return doubleCheck();
//     })
//     .then(res => console.log(res))
//     .then(() => {
//         console.log('Weryfikacja zakonczona');
//     })
//     .catch(error => console.error(error))

async function test() {
    try {
        await checkAge(2);
        console.log('chyba możesz wejść');
        await doubleCheck();
        console.log('faktycznie wiek sie zgadza');
    } catch {
        console.error('masz za mało lat')
    }
}

test()