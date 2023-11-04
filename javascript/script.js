const color = ['niebieski'];

color.push('czerwony');
color.unshift('fioletowy');

for (let i = 0; i < color.length; i++) {
    console.log(`Mój ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`);
}