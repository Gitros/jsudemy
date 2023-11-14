const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
    if (pass.value !== '') {
        showMsg()
    } else {
        p.textContent = 'nie podałeś hasła...'
        p.style.color = '';
    }
}


const showMsg = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(special)) {
        p.textContent = "masz dobre hasło";
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters)) {
        p.textContent = "masz spk hasło";
        p.style.color = 'gold';
    } else {
        p.textContent = "masz slabe hasło";
        p.style.color = 'tomato';
    }
}

pass.addEventListener('keyup', checkPassword);