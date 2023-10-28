const pass = '2u8ur345678';

if (pass.length > 10 && pass.includes('!')) {
    console.log('Masze rewelacyjne  hasło');
} else if (pass.length > 10) {
    console.log("masz dobre hasło");
} else {
    console.log("masz za krótkie hasło");
}