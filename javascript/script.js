const person = {
    name: 'Lily',
    age: 23,
    job: 'DJ',
    car: {
        brand: 'Dodge',
        model: 'Viper',
    }
}

const showInfo = ({ name, age, job }) => {
    console.log(`${name} pracuje jako ${job} i ma ${age} lata.`);
}

showInfo(person);

const showInfo2 = ({ car: { brand, model } }) => {
    console.log(`Jej samochód to ${brand} ${model}.`);
}

showInfo2(person);