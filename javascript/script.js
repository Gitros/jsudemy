const img = document.querySelector('img');
img.setAttribute("src", 'https://ipicasso.pl/image/cache/data/goods/00000004867-800x800.jpg');
img.setAttribute("alt", 'kotek');

function cokolwiek() {
    console.log('cokolwiek');
}

setTimeout(cokolwiek, 2000);