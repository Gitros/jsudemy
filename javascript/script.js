const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let text = '°C To ';

//T(°F) = T(°C) x 1.8 + 32
//T(°C) = (T(°F) -32) / 1.8

const change = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C'
        result.textContent = '';
    } else {
        one.textContent = '°C';
        two.textContent = '°F'
        result.textContent = '';
    }
}

const convert = () => {
    if (one.textContent === '°C') {
        farenheit = converter.value * 1.8 + 32;
        result.textContent = `${converter.value} °C to ${farenheit.toFixed(1)}°F`;
    } else if (one.textContent === '°F') {
        celsius = (converter.value - 32) / 1.8;
        result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    }
}

const conversion = () => {
    if (converter.value !== '') {
        convert();
    } else {
        result.textContent = 'Musisz podać jakąś wartość'
    }
}

const reset = () => {
    result.textContent = '';
    converter.value = '';
}

resetBtn.addEventListener('click', reset);
changeBtn.addEventListener('click', change);
convBtn.addEventListener('click', conversion);
