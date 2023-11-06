const lime = document.querySelector('.lime');
const blue = document.querySelector('.blue');
const gold = document.querySelector('.gold');

const infoLime = () => {
    console.log('%clime', ' color: lime; test-transform: uppercase');
}
const infoBlue = () => {
    console.log('%cblue', ' color: blue; test-transform: uppercase');
}
const infoGold = () => {
    console.log('%cgold', ' color: gold; test-transform: uppercase');
}

lime.addEventListener('click', infoLime)
blue.addEventListener('click', infoBlue)
gold.addEventListener('click', infoGold)