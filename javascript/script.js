//this w listenerach

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', (e) => {
    console.log(this);
    console.log('---');
    console.log(e.target);
    console.log('---');
}))

//this w funkcji strzałkowej

const ob = {
    number: 123,
    showNumber() {
        console.log(this.number);
    },
    showNumber2() {
        const test = () => {
            console.log(this.number);
            console.log(this);
        }
        test();
    }
}

ob.showNumber()
ob.showNumber2()