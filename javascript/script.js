const btn = document.querySelector('button');

const test = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.classList);
    console.log(e.target.offsetTop);
}

btn.addEventListener('click', test)