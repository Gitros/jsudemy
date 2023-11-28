setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
            }, 300)
        }, 300)
    }, 300)
}, 300)

const newPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 300);
    })
}

newPromise()
    .then(() => {
        console.log('1')
        return newPromise();
    })
    .then(() => {
        console.log('2')
        return newPromise();
    })
    .then(() => {
        console.log('3')
        return newPromise();
    })
    .then(() => {
        console.log('4')
        return newPromise();
    })
    .then(() => console.log('5'))
    .catch(err => console.error(err))

const test = new Promise((resolve, reject) => {
    if (!true) {
        resolve('jest ok')
    } else {
        reject('błąd')
    }
})

test
    .then(info => console.log(info))
    .catch(err => console.error(err));